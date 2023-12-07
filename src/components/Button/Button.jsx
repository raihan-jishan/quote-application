/* eslint-disable react/prop-types */ 
import { Link } from "react-router-dom";
  const Button = (props) => {
  //  get data by props
  const sendLink = props.sendLink;
  const title = props.title;
  const icon = props.icon;
  const background = props.background; 
  return (
    <Link to={sendLink}>
      <button 
        className="bg-gradient-to-r from-gray-600   text-3xl p-2 px-3 pt-3 pb-3  rounded-3xl shadow-lg transition-all hover:bg-gradient-to-r hover:from-gray-950 to-yellow-500   hover:to-yellow-500
       hover:scale-90  text-black max-lg:w-full max-lg:p-2"
       style={{background: background}}
      >
        <i className={icon}></i> {title}{" "}
      </button>
    </Link>
  );
};

export default Button; 
 