/* eslint-disable react/prop-types */
import { GoVerified } from "react-icons/go";
import { MdOutlinePostAdd } from "react-icons/md";
const CommentBox = (props) => {
  const click = props.click;
  const data = props.data;
  const makeComment = props.makeComment;
  return (
    <div>
      {click ? (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased   z-40 h-fit overflow-y-auto transition-all ">
          <div className="max-w-2xl mx-auto px-4" key={data._id}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-gray-300 font-Comfortaa">
                {data.comments.length} comments
              </h2>
            </div>
            <form
              className="mb-6"
              onSubmit={(e) => {
                e.preventDefault();
                makeComment(e.target[0].value, data._id);
              }}
            >
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>

                <input
                  id="comment"
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex    items-center py-2 px-4  font-medium text-center bg-yellow-400 bg-gradient-to-l from-gray-500 text-gray-900 text-xl rounded-full hover:scale-90 transition-all"
              >
                Post comment <MdOutlinePostAdd size={35} />
              </button>
            </form>
            {data.comments.map((data) => {
              return (
                <>
                  <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            className="mr-2 w-8 h-8 rounded-full"
                            src="https://cdn5.vectorstock.com/i/1000x1000/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg"
                            alt="user avater"
                          />
                          {data._id}
                        </p>
                        <p className="text-sm text-yellow-400 font-semibold ">
                          <GoVerified size={32} />
                        </p>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      {data.text}
                    </p>
                  </article>
                </>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default CommentBox;
