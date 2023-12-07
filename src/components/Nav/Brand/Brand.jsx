/*
  title: Barnd.jsx file,
  desc: simple brand file for application logo  , 
  date" 14 - 09 - 2023,
*/ 
import { BsChatRightQuote } from "react-icons/bs";

const Brand = () => {
  return (
    <div className="text-2xl text-gray-300 font-Montserrat font-semibold">
    {" "}
    <BsChatRightQuote className="inline text-yellow-400" size={40} />{" "}
    motivate quotes
  </div>
  )
}

export default Brand;