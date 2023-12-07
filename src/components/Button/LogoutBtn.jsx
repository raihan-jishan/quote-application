/* eslint-disable react/prop-types */
const LogoutBtn = (props) => {
  const handleLogout = props.function;
  const title = props.title;
  return (
    <button
      className="transition-all shadow-2xl bg-red-500 p-8 text-black text-2xl rounded-3xl font-semibold font-Montserrat py-3 hover:scale-95 hover:bg-red-600 flex max-lg:p-1 max-lg:py-3"
      onClick={handleLogout}
    >
      {title} <i className="fa-regular fa-right-from-bracket"></i>
    </button>
  );
};

export default LogoutBtn;
