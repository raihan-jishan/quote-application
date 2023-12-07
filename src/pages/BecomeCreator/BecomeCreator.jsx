/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { IlustrationForCreator, Login } from "../../modules/index.jsx";
import Submitbtn from "../../components/Button/Submitbtn";
import DashLayout from "../../Layouts/DashLayout.jsx";
import postContext from "../../context/postContext";

const BecomeCreator = () => {
  const context = useContext(postContext);
  const naviagte = useNavigate();
  const { addPost } = context;
  const [post, setPost] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tag: "",
  });
  const handlePost = (e) => {
    e.preventDefault();
    addPost(post.title, post.description, post.imageUrl, post.tag);
    setPost({ title: "", description: "", imageUrl: "", tag: "" });
    naviagte("/quote-added");
  };
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const [click, setClick] = useState(false);
  const hanldeClick = () => {
    setClick(!click);
  };
  return (
    <>
      {localStorage.getItem("token") ? (
        <DashLayout>
          <div className="ml-8  max-lg:mr-1">
            <div className="p-4 flex justify-around items-center  max-lg:flex-col  sticky top-0 bg-black">
              <h2 className="font-Montserrat   text-4xl font-semibold max-lg:ml-5  max-lg:text-2xl ">
                Become a creator
              </h2>
              <div className="flex justify-evenly items-center gap-8 p-1 mt-5 max-lg:gap-0">
                <Link to={"/"}>
                  <BsArrowReturnLeft
                    size={40}
                    className="font-Montserrat text-4xl font-semibold max-lg:ml-5 hover:scale-90 "
                  />
                </Link>
              </div>
            </div>
            <main className="">
              <div className="  flex items-center justify-center  max-lg:flex-col-reverse w-full ">
                <div className="w-full ">
                  <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                    <form className="space-y-4 md:space-y-6">
                      <div className="m-10">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          value={post.title}
                          onChange={onChange}
                          className="mt-10  text-2xl bg-gray-50 border border-gray-300 text-white sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                          placeholder="Quote title"
                          required
                        />
                      </div>
                      <div className="m-10">
                        <input
                          type="text"
                          name="description"
                          id="description"
                          value={post.description}
                          onChange={onChange}
                          className="mt-10  text-2xl bg-gray-50 border border-gray-300 text-white sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                          placeholder="Quote description.  .  . ."
                          required=""
                        />
                      </div>
                      <div className="m-10">
                        <input
                          type="text"
                          name="imageUrl"
                          id="imageUrl"
                          value={post.imageUrl}
                          onChange={onChange}
                          className="mt-10  text-2xl bg-gray-50 border border-gray-300 text-white sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                          placeholder="image url for quote .  .  . ."
                          required=""
                        />
                      </div>

                      <span className="text-gray-500 m-10">
                        write your quote category{" "}
                      </span>

                      <ul className="grid grid-cols-4 gap-4 cursor-pointer max-md:grid-cols-2">
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          motivational
                        </li>
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          Inspirational{" "}
                        </li>
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          Positive
                        </li>
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          Life
                        </li>
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          Dreams
                        </li>
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          Music
                        </li>
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          Billionaire
                        </li>
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          Legend
                        </li>
                        <li
                          className=" text-center border-2 border-yellow-400 text-gray-300 hover:bg-yellow-400
                    hover:scale-95 transition-all  hover:text-black text-xl font-semibold rounded-xl"
                        >
                          Alone
                        </li>
                      </ul>
                      <div className="m-10">
                        <input
                          type="text"
                          name="tag"
                          id="tag"
                          value={post.tag}
                          onChange={onChange}
                          className="mt-10  text-2xl bg-gray-50 border border-gray-300 text-white sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                          placeholder="category .  .  . ."
                          required
                        />
                      </div>
                      <div className="flex items-center justify-center mt-20">
                        <Submitbtn
                          title="Submit post"
                          icon="fa-light fa-receipt"
                          color="black"
                          Submit={handlePost}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex items-end justify-end  w-full">
                  <img
                    src={IlustrationForCreator}
                    alt="404 module not found!"
                    className="w-3/4 max-lg:w-full"
                  />
                </div>
              </div>
            </main>
            {/* option */}
            <div className="text-left mt-10 p-5 max-lg:p-1">
              <h1
                className="text-3xl font-Montserrat font-semibold max-lg:text-2xl"
                onClick={hanldeClick}
              >
                Coul
                <span className="border-b-4 border-yellow-400">
                  dnt find any quotes in mi
                </span>
                nd?{" "}
              </h1>
            </div>
            {/* google saerch  */}
            {click ? (
              <form
                action="https://www.google.com/search"
                className="p-10 "
                method="get"
                name="searchform"
                target="_blank"
              >
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="p-1 py-3 rounded-2xl bg-gray-900"
                  placeholder="Search quote .  .  . ."
                  required=""
                />

                <button
                  className="p-8 py-2 m-2 bg-yellow-400 text-black text-2xl font-semibold rounded-2xl hover:bg-yellow-500"
                  type="submit"
                >
                  Search
                </button>
              </form>
            ) : null} 
          </div>
        </DashLayout>
      ) : (
        <Login dashBoardText=" For access the dashboard" />
      )}
    </>
  );
};

export default BecomeCreator;
