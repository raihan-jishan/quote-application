/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Submitbtn from "../../components/Button/Submitbtn";
import DashLayout from "../../Layouts/DashLayout.jsx";
import postContext from "../../context/postContext";
import Login from "../../authentication/Login.jsx";
 
const BecomeaBloger = () => {
  const context = useContext(postContext);
  const { addBlogPost } = context;
  const [post, setPost] = useState({
    title: "",
    description: "",
    imageUrl: "",
    personName: "",
  });
  const navigate = useNavigate();
  const handlePost = (e) => {
    e.preventDefault();
    addBlogPost(post.title, post.description, post.imageUrl, post.personName);
    setPost({ title: "", description: "", imageUrl: "", personName: "" });
    navigate("/blogadded-success");
  };
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
  <>
  {localStorage.getItem("token") ? (
      <DashLayout>
      <div className="ml-8  max-lg:mr-1">
        <div className="p-4 flex justify-around items-center  max-lg:flex-col  sticky top-0 bg-black">
          <h2 className="font-Montserrat   text-4xl font-semibold max-lg:ml-5  max-lg:text-2xl ">
            Become a Bloger
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
              <div className="text-center text-4xl font-Montserrat font-semibold text-gray-100">
                Edit blog content
              </div>
              <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6">
                  <div className="m-2">
                    <label
                      htmlFor="text"
                      className="text-2xl font-medium capitalize  text-300  "
                    >
                      title of the blog post
                    </label>
                  </div>
                  <div className="m-5">
                    <textarea
                      type="text"
                      name="title"
                      id="title"
                      value={post.title}
                      onChange={onChange}
                      className="  text-gray-50 bg-black border-b-2 border-gray-400 text-2xl w-3/4"
                      placeholder="enter the title of the blogpost . . .  ."
                      required=""
                    />
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="text"
                      className="text-2xl font-medium capitalize  text-300 "
                    >
                      description of the blog post....
                    </label>
                  </div>
                  <div className="m-5">
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      value={post.description}
                      onChange={onChange}
                      className="  text-gray-50 bg-black border-b-2 border-gray-400 text-2xl w-3/4"
                      placeholder="enter description of the blog post .  .  . ."
                      required=""
                    />
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="text"
                      className="text-2xl font-medium capitalize  text-300 "
                    >
                      Image Url for the blog
                    </label>
                  </div>
                  <div className="m-2">
                    <img
                      src="https://media.npr.org/assets/img/2022/06/01/ap22146727679490-6b4aeaa7fd9c9b23d41bbdf9711ba54ba1e7b3ae-s800-c85.webp"
                      alt="module not found!"
                      className="
                w-96
                max-lg:w-3/4"
                    />
                  </div>
                  <div className="m-5">
                    <textarea
                      type="text"
                      name="imageUrl"
                      id="imageUrl"
                      value={post.imageUrl}
                      onChange={onChange}
                      className="  text-gray-50 bg-black border-b-2 border-gray-400 text-2xl w-3/4"
                      placeholder="image url for quote .  .  . ."
                      required=""
                    />
                  </div>
                  <label
                    htmlFor="text"
                    className="text-2xl font-medium capitalize  text-300 "
                  >
                    Person name or Tag
                  </label>
                  <div className="m-5">
                    <textarea
                      type="text"
                      name="personName"
                      id="personName"
                      value={post.personName}
                      onChange={onChange}
                      className="  text-gray-50 bg-black border-b-2 border-gray-400 text-2xl w-3/4"
                      placeholder="enter here .  .  . ."
                      required={true}
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
          </div>
        </main>  
        {/* option for help */}
        <div className="text-left mt-10 p-5 max-lg:p-1">
          <Link to={"/blogidea"}>
            <h1 className="text-3xl font-Montserrat font-semibold max-lg:text-2xl">
              😢 Coul
              <span className="border-b-4 border-gray-500">
                dnt find any idea in mi
              </span>
              nd?{" "}
            </h1>
          </Link>
        </div> 
      </div>
    </DashLayout>
       ) : (
         <Login dashBoardText=" For access the dashboard" />
       )}
  </>
   
    
  );
};

export default BecomeaBloger;
