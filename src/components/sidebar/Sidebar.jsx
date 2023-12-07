import { useState } from "react";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { SiHelpscout } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleOpen = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="text-left ">
        <button
          className="fixed top-0 bg-black text-white"
          type="button"
          onClick={handleOpen}
        >
          <HiOutlineBars3CenterLeft size={40} />
        </button>
      </div>

      <div
        id="drawer-navigation"
        className={
          sidebar
            ? "fixed top-0 left-0 z-40 w-96 h-screen p-4 overflow-y-auto transition-transform bg-black transform-none max-lg:w-full"
            : "fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto  -translate-x-full bg-gray-500 transition-all"
        }
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <button
          onClick={handleOpen}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white absolute"
        >
          <AiOutlineClose size={30} />
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-9 font-normal">
            <li>
              <Link
                to={"/dashboard"}
                href="#"
                onClick={handleOpen}
                className="flex items-center p-2 text-gray-900 rounded-xl dark:text-white    border-b-2 border-transparent dark:hover:bg-gray-900 hover:border-yellow-400 group 
              text-3xl
              max-lg:text-3xl"
              >
                <BsClipboardData size={40} className="text-yellow-400" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/profile"}
                href="#"
                onClick={handleOpen}
                className="flex items-center p-2 text-gray-900 rounded-xl dark:text-white    border-b-2 border-transparent dark:hover:bg-gray-900 hover:border-yellow-400 group 
              text-2xl
              max-lg:text-3xl"
              >
                <AiOutlineUser size={40} className="text-yellow-500" />
                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  settings
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/becomecreator"
                onClick={handleOpen}
                className="flex items-center p-2 text-gray-900 rounded-3xl dark:text-black font-semibold   bg-yellow-500 border-2 border-transparent dark:hover:scale-90 hover:border-yellow-400  group 
              text-3xl   transition-all
              max-lg:text-2xl"
              >
                <TfiWrite size={35} />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Become a creator
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/becomeabloger"
                onClick={handleOpen}
                className="flex items-center p-2   rounded-xl  text-white    border-b-2 border-transparent dark:hover:border-yellow-500  group  text-2xl max-lg:text-3xl font-Comfortaa font-semibold hover:text-gray-400"
              >
                <MdOutlinePostAdd size={40} className="text-yellow-500   " />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Become a bloger
                </span>
              </Link>
            </li>

            <li>
              <Link
                to={"/account"}
                onClick={handleOpen}
                className="flex items-center p-2 text-gray-900 rounded-xl dark:text-white    border-b-2 border-transparent  text-xl dark:hover:bg-gray-900 hover:border-yellow-400 group max-lg:text-2xl font-Montserrat font-semibold"
              >
                <RiAccountPinBoxLine size={40} className="text-yellow-500" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Add onother account
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={handleOpen}
                className="flex items-center p-2 text-gray-900 rounded-xl dark:text-white    border-b-2 border-transparent dark:hover:bg-gray-900 hover:border-yellow-400 group text-2xl max-lg:text-3xl font-Montserrat font-semibold"
              >
                <SiHelpscout size={40} className="text-yellow-500" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  help and su{" "}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
