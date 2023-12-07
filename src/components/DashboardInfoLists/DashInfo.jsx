import { useContext, useEffect, useState } from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsArrowReturnLeft, BsPostcard } from "react-icons/bs";
import { GoDiscussionOutdated } from "react-icons/go";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import BarChart from "../../components/Chart/BarChart.jsx";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import postContext from "../../context/postContext.jsx";
import CreateprojectBtn from "../Button/CreateprojectBtn";
import QouteListSkeleton from "../LoadingSkeleton/QouteListSkeleton.jsx";
import WritingPostsList from "../WritingPostsList/WritingPostsList.jsx";
import ActivityList from "./ActivityList.jsx";
const DashInfo = () => {
  const context = useContext(postContext);
  const { creatorPost, getCreatorPost } = context;
  useEffect(() => {
    getCreatorPost();
  });
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const chartData = {
    labels: creatorPost.map((data) => data.description.length),
    datasets: [
      {
        label: "Words",
        data: creatorPost.map((data) => data.description.length),
        backgroundColor: ["#facc15", "#fbbf24"],
        borderColor: "black",
        borderWidth: 2,
        borderRadius: Number.MIN_SAFE_INTEGER,
      },
    ],
  };

  return (
    <div className="ml-8  max-lg:mr-1">
      {/* top layout  */}
      <div className="p-4 flex justify-around items-center  max-lg:flex-col  sticky top-0 bg-black">
        <h2 className="font-Montserrat   text-4xl font-semibold max-lg:ml-5  ">
          Overview
        </h2>
        <div className="flex justify-evenly items-center gap-8 p-1 mt-5 max-lg:gap-0">
          <Searchbar handleClick={handleClick} />

          <h2 className="font-Montserrat text-4xl font-semibold max-lg:ml-5 hover:scale-90   ">
            <Link to={"/profile"}>
              <BiUser size={40} />
            </Link>
          </h2>
          <CreateprojectBtn title="create a post" SendLink="/becomecreator" />
          <Link to={"/"}>
            <BsArrowReturnLeft
              size={40}
              className="font-Montserrat text-4xl font-semibold max-lg:ml-5 hover:scale-90 "
            />
          </Link>
        </div>
      </div>
      {/* seach bar  */}
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
      {/* close  */}
      {/* post status */}
      <div>
        <h1 className="text-3xl   mt-5 font-Montserrat font-semibold flex">
          Your post status <BsPostcard size={40} className="ml-4" />
        </h1>
      </div>
      <div
          className="
      grid grid-cols-3 gap-3 mb-4 mt-5 max-lg:grid-cols-1
        max-sm:flex-col max-sm:gap-3 "
        >
           <ActivityList 
           creatorPost={creatorPost}
           />
            
          </div>
      {/* close  */}
      {/* writing status */}
      <h2 className="font-semibold font-Comfortaa text-4xl mt-10  max-lg:text-center flex">
        writing status <AiOutlineAreaChart size={45} className="ml-4" />
      </h2>

      <div
        className=" m-auto
       w-1/2 max-lg:w-full p-23 mt-5  "
      >
        <BarChart chartData={chartData} />
      </div>

      {/* close  */}
      {/* writing posts lists */}
      <h2 className="font-semibold font-Montserrat text-4xl mt-10  max-lg:text-center flex">
        Your writing posts
        <GoDiscussionOutdated size={45} className="ml-4" />
      </h2>
      <InfiniteScroll
        dataLength={creatorPost.length}
        hasMore={creatorPost.length !== creatorPost}
        loader={<QouteListSkeleton />}
      >
        <div className="grid grid-cols-3 gap-4 m-5 max-lg:grid-cols-1">
          {creatorPost.map((data) => {
            return <WritingPostsList key={data._id} data={data} />;
          })}
        </div>
      </InfiniteScroll>
      {/* close   */}
    </div>
  );
};

export default DashInfo;
