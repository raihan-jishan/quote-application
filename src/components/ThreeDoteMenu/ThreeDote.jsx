/* eslint-disable react/prop-types */
import { CiViewTimeline } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
const ThreeDote = (props) => {
  const click = props.click;
  const data = props.data;
  return (
    <div>
      {click ? (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased   z-40 h-fit overflow-y-auto transition-all    ">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-gray-300 font-Comfortaa">
                Quote details
              </h2>
            </div>
            <>
              <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-xl text-gray-900 dark:text-white font-semibold">
                      Posted {new Date(data.date).toDateString()}
                    </p>
                    <p className="text-sm text-yellow-400 font-semibold ">
                      <CiViewTimeline size={40} />
                    </p>
                  </div>
                </footer>
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-xl text-gray-900 dark:text-white font-semibold">
                    {data.likes.length} likes
                  </p>
                  <p className="text-sm text-yellow-400 font-semibold ">
                    <AiOutlineLike size={40} />
                  </p>
                  <p className="inline-flex items-center mr-3 text-xl text-gray-900 dark:text-white font-semibold">
                    {data.comments.length} comments
                  </p>

                  <p className="text-sm text-yellow-400 font-semibold ">
                    <MdOutlineComment size={40} />
                  </p>
                </div>
                <div className="mt-10">posted by {data._id}</div>
              </article>
            </>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default ThreeDote;
