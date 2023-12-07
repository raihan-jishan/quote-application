import { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCloudCheck } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import postContext from "../../context/postContext";
import AlertNotification from "../AlertNotification/AlertNotification";
import ThreeDote from "../ThreeDoteMenu/ThreeDote";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
const WritingPostsList = (props) => {
  const { data } = props;
  const context = useContext(postContext);
  const { deletePost } = context;
  const [click, setClick] = useState();
  const [open, setOpen] = useState();
  const navigate = useNavigate();
  const openThreeDote = () => {
    setOpen(!open);
  };
  const handleDelete = () => {
    deletePost(data._id);
    navigate("/success-to-deletepost");
  };
  const handleOpen = () => {
    setClick(!click);
  };
  const handleClose = () => {
    setClick(false);
  };
  return (
    <>
      {click ? (
        <AlertNotification
          description={data.description}
          function={handleDelete}
          handleClose={handleClose}
        />
      ) : null}
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-fit">
        <img
          className="w-full rounded-xl"
          src={
            !data.imageUrl
              ? "https://www.svgrepo.com/show/12932/quote.svg"
              : data.imageUrl
          }
          alt={data.imageUrl}
        />
        <div className="px-6 py-4">
          <div className="text-2xl  font-semibold mb-2 font-Montserrat">
            {data.title}
          </div>

          <p className="font-Comfortaa text-xl text-gray-400  font-bold ">
            {data.description}
          </p>
        </div>
        <div className="flex items-start justify-start gap-2">
          <span className="text-gray-500 text-lg font-Montserrat font-bold p-1 hover:bg-gray-700 rounded-full  ">
            {data.likes.length} likes
          </span>
          <span className="text-gray-500 text-lg font-Montserrat font-bold p-1 hover:bg-gray-700 rounded-full  ">
            {data.comments.length} comments
          </span>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-evenly">
          <span className="inline-block bg-yellow-400 rounded-lg px-4 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:scale-90 transition-all">
            {/* like function  */}
            <FaRegEdit size={35} />
          </span>

          <span className="inline-block bg-yellow-400 rounded-lg px-4 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:scale-90 transition-all">
            <BsCloudCheck size={35} />
          </span>
          <span className="inline-block border-2 border-yellow-400 rounded-lg px-4 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2 hover:scale-90 transition-all">
            <AiOutlineDelete size={35} onClick={handleOpen} />
          </span>
          <span className="inline-block bg-yellow-400 rounded-lg px-4 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:scale-90 transition-all">
            <IoIosOptions size={40} onClick={openThreeDote} />
          </span>
        </div>

        <ThreeDote click={open} data={data} />
      </div>
    </>
  );
};

export default WritingPostsList;
