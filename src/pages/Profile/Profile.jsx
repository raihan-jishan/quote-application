// import moment from "moment";
import BarChart from "../../components/Chart/BarChart.jsx";
import { useContext, useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import CreateprojectBtn from "../../components/Button/CreateprojectBtn.jsx";
import LogoutBtn from "../../components/Button/LogoutBtn.jsx";
import DashLayout from "../../Layouts/DashLayout.jsx";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import postContext from "../../context/postContext.jsx";
import { AiOutlineAreaChart } from "react-icons/ai";
const Profile = () => {
  const context = useContext(postContext);
  const { user, getUserDetails, creatorPost, getCreatorPost } = context;
  useEffect(() => {
    getUserDetails();
    getCreatorPost();
  });
  const chartData = {
    labels: creatorPost.map((data) => data.date.length),
    datasets: [
      {
        label: "Posting Status",
        data: creatorPost.map((data) => data.date.length),
        backgroundColor: ["#22c55e", "#fbbf24"],
        borderColor: "black",
        borderWidth: 2,
        borderRadius: Number.MIN_VALUE,
      },
    ],
  };
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  // functions
  const handleClick = () => {
    setClick(!click);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/logout-success");
  };

  return (
    <DashLayout>
      <div className="ml-8  max-lg:mr-1">
        <div className="p-4 bg-black flex justify-around items-center  max-lg:flex-col  sticky top-0 ">
          <h2 className="font-Montserrat   text-4xl font-semibold max-lg:ml-5  ">
            Profile
          </h2>
          <div className="flex justify-evenly items-center gap-8 p-1 mt-5 max-lg:gap-0">
            <Searchbar handleClick={handleClick} />

            <h2 className="font-Montserrat text-4xl font-semibold max-lg:ml-5 hover:scale-90   ">
              <BiUser size={40} />
            </h2>
            <LogoutBtn title="Logout" function={handleLogout} />
            <Link to={"/"}>
              <BsArrowReturnLeft
                size={40}
                className="font-Montserrat text-4xl font-semibold max-lg:ml-5 hover:scale-90 "
              />
            </Link>
          </div>
        </div>
        {/* search bar  */}
        {click ? (
          <div
            className="mt-2 p-2    bg-gray-900 rounded-3xl py-1
        transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300
        "
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search... "
              className="form-input w-56 bg-transparent shadow-xl outline-none font-medium  text-3xl font-Montserrat rounded-2xl ml-10  "
            />
          </div>
        ) : null}
        {/* profile picture and details */}
        <div className="bg-gray-900 flex items-start justify-start rounded-md shadow-md">
          <img
            src={
              !user.imageUrl
                ? "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                : user.imageUrl
            }
            alt="picture not found!"
            className="w-28 hover:scale-95 cursor-pointer transition-all"
          />
          <div className="flex-col">
            <div className="m-5">
              <h1 className="font-Montserrat text-3xl font-semibold text-gray-200">
                {user.name}
              </h1>
            </div>
            <div className="m-3 flex max-lg:flex-col">
              <h1 className="font-Montserrat text-xl font-semibold m-2 text-gray-200">
                {user.email}
              </h1>
              <h1 className="font-Montserrat  text-xl font-semibold m-2 w-full">
                {new Date(user.date).toDateString()}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* working details  */}
      <h2 className="font-semibold   font-Comfortaa text-4xl mt-10  max-lg:text-center flex">
        your working records <AiOutlineAreaChart size={45} className="ml-4" />
      </h2>
      <div
        className=" m-auto
       w-1/2 max-lg:w-full p-23 mt-5  "
      >
        <BarChart chartData={chartData} />
      </div>
      {/* more accounts  */}
      <h1 className="text-left m-5 font-Montserrat font-semibold text-3xl flex">
        more accounts <FiUserPlus size={40} className="ml-3" />
      </h1>
      <div className="flex items-center justify-center p-2">
        <CreateprojectBtn title="Add onother account" sendLink="/account"/>
      </div>
    </DashLayout>
  );
};

export default Profile;
