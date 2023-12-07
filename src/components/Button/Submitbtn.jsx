/* eslint-disable react/prop-types */
const Submitbtn = (props) => {
  //  get data by props
  const title = props.title;
  const icon = props.icon;
  const Submit = props.Submit;
  const color = props.color;
  const padding = props.padding;
  return (
    <button
      onClick={Submit}
      type="submit"
      className="bg-yellow-400 bg-gradient-to-l from-gray-900  text-4xl p-2 pl-6 pr-6 pt-2 pb-2  rounded-3xl shadow-lg transition-all hover:bg-gradient-to-r 
       hover:scale-90   max-lg:w-full max-lg:p-2 hover:bg-yellow-500"
      style={{ color: color, padding: padding }}
    >
      <i className={icon}></i> {title}{" "}
    </button>
  );
};

export default Submitbtn;
