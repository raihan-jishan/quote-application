import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { MdOutlineCommentsDisabled } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import CommentBox from "../CommentBox/CommentBox";
import ThreeDote from "../ThreeDoteMenu/ThreeDote";
import { RWebShare } from "react-web-share";
/* eslint-disable react/prop-types */
const QuoteList = (props) => {
  const { data, likePost, makeComment } = props;
  const [click, setClick] = useState("");
  const [open, setOpen] = useState("");
  const openCommentBox = () => {
    setClick(!click);
  };
  const closeCommentBox = () => {
    setClick(false);
  };
  const openThreeDote = () => {
    setOpen(!open);
  };
  return (
    <div className="max-w-sm   overflow-hidden shadow-lg h-fit border-2 border-black rounded-xl">
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

        <p className="font-Comfortaa text-xl text-gray-200  font-bold ">
          {data.description}
        </p>
      </div>
      <div className="flex items-start justify-start gap-2">
        <span className="text-gray-500 text-lg font-Montserrat font-bold p-1 hover:bg-gray-900 rounded-full  ">
          {data.likes.length} likes
        </span>
        <span className="text-gray-500 text-lg font-Montserrat font-bold p-1 hover:bg-gray-900 rounded-full  ">
          {data.comments.length} comments
        </span>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-evenly">
        <span className="inline-block  rounded-t-full  rounded-r-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2 hover:scale-90 transition-all border-2 border-yellow-400">
          {/* like function  */}
          <AiOutlineLike
            size={40}
            onClick={() => {
              likePost(data._id);
            }}
          />
        </span>
        <span
          className="inline-block border-2 border-yellow-500 rounded-fancyBorderRadius  rounded-t-full  rounded-r-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 hover:scale-90 transition-opacity
        duration-75"
        >
          {click ? (
            <MdOutlineCommentsDisabled size={40} onClick={closeCommentBox} />
          ) : (
            <FaRegComment size={40} onClick={openCommentBox} />
          )}
        </span>

        <span className="inline-block  bg-yellow-400 rounded-fancyBorderRadius  rounded-t-full  rounded-r-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:scale-90 transition-all">
          <RWebShare
            data={{
              text: data.description,
              url: "www,facebook.com",
              title: data.title,
            }}
          >
            <FaRegShareSquare size={35} />
          </RWebShare>
        </span>

        <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-yellow-400 mr-2 mb-2 hover:scale-90 transition-all">
          <SlOptionsVertical size={30} onClick={openThreeDote} />
        </span>
      </div>
      {/* comment box  */}
      <CommentBox click={click} data={data} makeComment={makeComment} />
      {/* three dote menu  */}
      <ThreeDote click={open} data={data} makeComment={makeComment} />
    </div>
  );
};

export default QuoteList;
