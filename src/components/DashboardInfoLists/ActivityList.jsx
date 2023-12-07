import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";

/* eslint-disable react/prop-types */
const ActivityList = ({ creatorPost }) => {
  return (
    <>
      <div className="max-w-sm   overflow-hidden shadow-lg h-fit border-2   rounded-3xl mt-4 border-black bg-gray-800 hover:scale-90 transition-all ">
        {/* likes */}
        <div className="flex gap-2 p-6 flex-col ">
           
         <div className="flex items-center justify-between">
         <AiOutlineLike size={70} className="bg-yellow-400 text-black rounded-3xl p-2"/> <span className="text-4xl">Likes</span>
         </div>
          <div className="m-2 bg-black p-4 rounded-full   px-6">
            <h1 className="text-4xl font-Montserrat font-semibold">
              {creatorPost
                .map((data) => data.likes.length)
                .reduce((acc, curr) => acc + curr, 0)}
              
            </h1>
          </div>
        </div>
      </div>
      {/* comments */}
      <div className="max-w-sm   overflow-hidden shadow-lg h-fit border-2   rounded-3xl mt-4 border-yellow-400 bg-black hover:scale-90 transition-all ">
        
        <div className="flex gap-2 p-6 flex-col ">
           
         <div className="flex items-center justify-between">
         <FaRegComment size={70} className="bg-gray-400 text-black rounded-3xl p-2"/> <span className="text-4xl">Comments</span>
         </div>
          <div className="m-2 bg-gray-900 p-4 rounded-full   px-6">
            <h1 className="text-4xl font-Montserrat font-semibold">
              {creatorPost
                .map((data) => data.comments.length)
                .reduce((acc, curr) => acc + curr, 0)}
              
            </h1>
          </div>
        </div>
      </div>
      {/* wordwriting */}
      <div className="max-w-sm   overflow-hidden shadow-lg h-fit border-2   rounded-3xl mt-4 border-black bg-gray-800 hover:scale-90 transition-all ">
        <div className="flex gap-2 p-6 flex-col ">
           
         <div className="flex items-center justify-between">
         <MdOutlineLibraryBooks size={70} className="bg-yellow-400 text-black rounded-3xl p-2"/> <span className="text-4xl max-lg:text-3xl">Word Writing</span>
         </div>
          <div className="m-2 bg-black p-4 rounded-full   px-6">
            <h1 className="text-4xl font-Montserrat font-semibold">
              {creatorPost
                .map((data) => data.description.length)
                .reduce((acc, curr) => acc + curr, 0)}
              
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityList;
