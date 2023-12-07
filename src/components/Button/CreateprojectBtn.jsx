/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CreateprojectBtn = (props) => {
  // get data by props
  const title = props.title;
  const SendLink = props.SendLink;
  return (
     <Link to={SendLink}>
     <button  className="transition-all shadow-2xl bg-yellow-400 p-4 text-black text-2xl rounded-3xl font-semibold font-Montserrat py-3 hover:scale-95 hover:bg-yellow-600 flex max-lg:p-1 max-lg:py-3">
        {title} <i className="fa-regular fa-grid-2-plus text-3xl"></i>
     </button>
     </Link>
  )
}

export default CreateprojectBtn;