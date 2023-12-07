import Button from "../../components/Button/Button";
import HomeIlustrations from "../../components/Ilustrations/HomeIlustrations";
import Quotes from "../Quotes/Quotes";
const Home = () => {
  return (
    <div>
      <main className="m-20 mb-auto  ">
      <div className="  flex items-center justify-center  max-lg:flex-col-reverse w-full  ">
        <div className="leading-3">
          <h1 className="text-6xl   max-lg:text-6xl shadow-sm font-Comfortaa max-lg:mt-3"> Motivate quotes </h1>
          <div className="m-2">
            <p className="text-3xl shadow-sm">
              find all kind Motivate quotes of successful peoples.
            </p>
          </div>
          <div className="flex gap-1 max-lg:flex-col w-full">
            <Button title="top quotes" icon={"fa-light fa-quote-left"} sendLink="top-quotes" />
            <br />
            <Button title="legend quote" icon=" fa-regular fa-book" sendLink="/positive"/>
          </div>
        </div>

        <HomeIlustrations /> 
      </div>
    </main>
    <Quotes />
    </div>
  );
};

export default Home;
