/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
const AlertNotification = (props) => {
  // get data by props
  const description = props.description;
  const handleClose = props.handleClose;
  const handleClick = props.function;
  return (
    <div className="fixed  w-full top-0 m-40   transition-all    bg-gray-800 p-10 max-lg:p-6  max-lg:m-12    rounded-xl  ">
      <div className="flex items-center ">
        <svg
          className="flex-shrink-0 w-4 h-4 me-2 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">delete</span>
        <h3 className="text-2xl font-medium text-gray-100 font-Montserrat">
          Delete this post
        </h3>
      </div>
      <div className="mt-2 mb-4 text-2xl text-gray-100 font-Montserrat">
        {description}
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-white bg-red-500 hover:bg-gray-400    font-medium rounded-lg text-xl px-3 py-1.5 me-2 text-center inline-flex items-center "
          onClick={handleClick}
        >
          <AiOutlineDelete size={25} />
          Delete
        </button>
        <button
          type="button"
          className="text-gray-200 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg   px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800  dark:hover:text-white text-sm"
          data-dismiss-target="#alert-additional-content-5"
          aria-label="Close"
          onClick={handleClose}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default AlertNotification;
