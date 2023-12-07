/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import BlogPostSkeleton from "../LoadingSkeleton/BlogPostSkeleton";
const BlogItems = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const { data } = props;
  return (
    <section className="text-gray-600    body-font overflow-hidden  ">
      {loading ? (
        <BlogPostSkeleton />
      ) : (
        <div className="container px-5 py-24 mx-auto">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center  rounded-md"
            src={data.imageUrl}
          />
          <div className="lg:w-full mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-4xl   text-yellow-400  ">
                <span className="text-gray-300 text-4xl">#</span>
                {data.personName}
              </h2>
              <h1 className="text-gray-300 text-center m-2 font-Comfortaa text-3xl title-font font-medium mb-1">
                {data.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center gap-3 justify-center ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a
                    className="text-gray-500"
                    href={`https://facebook.com/${data.personName.replace(
                      / /g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook size={40} className="text-blue-500" />
                  </a>
                  <a
                    className="text-gray-500"
                    href={`https://twitter.com/${data.personName.replace(
                      / /g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiTwitter size={40} className="text-blue-400" />
                  </a>
                  <a
                    className="text-gray-500"
                    href={`https://google.com/search?q=${data.personName.replace(
                      / /g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGoogle size={40} className="text-yellow-500" />
                  </a>
                </span>
              </div>

              <p className="leading-relaxed w-full text-xl text-gray-300 ">
                {data.description.substring(0, 2050)}
              </p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogItems;
