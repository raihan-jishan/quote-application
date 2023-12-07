import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const handleClick = props.handleClick;
  return (
    <div>
      <label
        htmlFor="searchBox"
        className="relative  bg-gray-900 block py-3 
          rounded-full   transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 max-md:hidden
          "
      >
        <AiOutlineSearch
          className="pointer-events-none text-gray-500 w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-2 "
          size={40}
        />

        <input
          type="text"
          name="search"
          id="search"
          placeholder="search... "
          className="form-input w-full bg-transparent shadow-xl outline-none font-medium  text-3xl font-Montserrat rounded-2xl ml-10  "
        />
      </label>
      {/* mobile search bar */}
      <label
        htmlFor="email"
        className="relative  bg-gray-900  py-3 
          rounded-full hidden  max-md:block
          "
      >
        <AiOutlineSearch
          onClick={handleClick}
          className=" text-gray-500 w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-2 max-lg:-ml-5"
          size={40}
        />
      </label>
    </div>
  );
};

export default Searchbar;
