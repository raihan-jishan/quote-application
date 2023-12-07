import { HomePic } from "../../modules/index.jsx";

const HomeIlustrations = () => {
  return (
    <div className="flex items-end justify-end  ">
      <img
        src={HomePic}
        alt="404 module not found!"
        className="w-2/3 max-lg:w-fit rounded-2xl"
      />
    </div>
  );
};

export default HomeIlustrations;
