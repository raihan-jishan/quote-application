import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import Brand from "./Brand/Brand";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (
      ![
        "/dashboard",
        "/profile",
        "/becomecreator",
        "/becomeabloger",
        "/auth-success",
        "/login-success",
        "/login-warning",
        "/success-to-deletepost",
      ].includes(location.pathname)
    ) {
      setShow(true);
    } else {
      setShow(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => {
    setClick(!click);
  };

  const handleClose = () => {
    setClick(false);
  };

  return (
    <div className="sticky top-0">
      {show && (
        <header
          className="w-full h-20  
        shadow-lg
        transition-all
        duration-75
    flex bg-black items-center justify-between p-4 py-6"
        >
          <Brand />
          <nav className="hidden sm:block md:block  lg:block">
            <ul className="flex">
              <li>
                <Link
                  className=" border-2 border-transparent
              block  p-5 py-2 text-white text-3xl  hover:border-2  hover:border-yellow-400 transition-all duration-100 rounded-3xl w-full"
                  to={"/"}
                >
                  <i className="fa-light fa-house"></i> Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/top-quotes"}
                  className="
              border-2 border-transparent
              block  p-5 py-2 text-white text-3xl  hover:border-2  hover:border-yellow-400 transition-all duration-100 rounded-3xl w-full"
                >
                  <i className="fa-light fa-message-middle-top"></i> top quotes
                </Link>
              </li>
              <li>
                <Link
                  to={"/topic"}
                  className="
              border-2 border-transparent
              block  p-5 py-2 text-white text-3xl  hover:border-2  hover:border-yellow-400 transition-all duration-100 rounded-3xl w-full"
                >
                  <i className="fa-thin fa-list"></i> Topics
                </Link>
              </li>
              <li>
                <Link
                  to={"/blogposts"}
                  className="
              border-2 border-transparent
              block  p-5 py-2 text-white text-3xl  hover:border-2  hover:border-yellow-400 transition-all duration-100 rounded-3xl w-full"
                >
                  <i className="fa-light fa-newspaper"></i> BlogPosts
                </Link>
              </li>
              <li>
                {localStorage.getItem("token") ? (
                  <Link
                    to={"/dashboard"}
                    className="
              border-2 border-transparent
              block  p-5 py-2 text-white text-3xl  hover:border-2  hover:border-yellow-400 transition-all duration-100 rounded-3xl w-full"
                  >
                    <i className="fa-light fa-chart-line"></i> dashboard
                  </Link>
                ) : (
                  <Link
                    to={"/account"}
                    className="
          border-2 border-transparent
          block  p-5 py-2 text-white text-3xl  hover:border-2  hover:border-yellow-400 transition-all duration-100 rounded-3xl w-full"
                    onClick={handleClose}
                  >
                    <i className="fa-regular fa-user"></i> account
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <div
            className="sm:hidden block transition-all duration-200"
            onClick={handleClick}
          >
            {click ? (
              <AiOutlineClose className="text-white" size={40} />
            ) : (
              <HiBars3BottomRight className="text-white" size={40} />
            )}
          </div>
          {/* Mobile Menu */}
          <nav
            className={
              click
                ? "sm:hidden h-fit shadow-2xl absolute top-20 left-0 right-0 w-full bg-black transition-all overflow-hidden opacity-1 -mt-5"
                : "sm:hidden h-0 absolute top-20 left-0 right-0 w-full bg-black transition-all overflow-hidden opacity-0"
            }
          >
            <ul className="block w-fit m-auto my-20  text-center transition-all text-white">
              <li
                onClick={handleClick}
                className="
            mb-2
            p-5 text-4xl hover:border-2 border-yellow-400 transition-all duration-100 rounded-3xl"
              >
                <Link to="/" className="mb-8 text-3xl">
                  <i className="fa-light fa-house"></i> Home
                </Link>
              </li>
              <li
                onClick={handleClick}
                className="
            mb-2
            p-5 text-4xl hover:border-2 border-yellow-400 transition-all duration-100 rounded-3xl"
              >
                <Link to="/top-quotes" className="mb-8 text-2xl">
                  <i className="fa-regular fa-book"></i> top quotes
                </Link>
              </li>
              <li
                onClick={handleClick}
                className="
            mb-5
            p-3 text-4xl hover:border-2 border-yellow-400 transition-all duration-100 rounded-3xl"
              >
                <Link to="/topic" className="mb-8 text-3xl">
                  <i className="fa-thin fa-list"></i> Topics
                </Link>
              </li>
              <li
                onClick={handleClick}
                className="
            mb-7
            p-5 text-4xl hover:border-2 border-yellow-400 transition-all duration-100 rounded-3xl"
              >
                <Link href="/blogposts" className="mb-8 text-3xl">
                  <i className="fa-light fa-newspaper"></i> BlogPosts
                </Link>
              </li>
              <li>
                {localStorage.getItem("token") ? (
                  <Link
                    to={"/dashboard"}
                    className="
              border-2 border-transparent
              block  p-5 py-2 text-white text-3xl  hover:border-2  hover:border-yellow-400 transition-all duration-100 rounded-3xl w-full"
                  >
                    <i className="fa-light fa-chart-line"></i> dashboard
                  </Link>
                ) : (
                  <Link
                    to={"/account"}
                    className="
          border-2 border-transparent
          block  p-5 py-2 text-white text-3xl  hover:border-2  hover:border-yellow-400 transition-all duration-100 rounded-3xl w-full"
                    onClick={handleClose}
                  >
                    <i className="fa-regular fa-user"></i> account
                  </Link>
                )}
              </li>
            </ul>
          </nav> 
        </header>
      )}
    </div>
  );
};

export default Navbar;
