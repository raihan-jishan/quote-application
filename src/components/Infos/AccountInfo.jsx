/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const AccountInfo = (props) => {
  // get data by props
  const sendLink = props.sendLink;
  const topText = props.topText;
  const text = props.text;
  return (
    <p className="text-2xl font-sm font-Comfortaa text-gray-500 dark:text-gray-500">
      {topText}
      <Link
        to={sendLink}
        className="font-medium hover:underline text-yellow-500 m-2 text-2xl"
      >
        {text}
      </Link>
    </p>
  );
};

export default AccountInfo;
