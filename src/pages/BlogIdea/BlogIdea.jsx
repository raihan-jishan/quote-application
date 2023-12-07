/* eslint-disable react/no-unescaped-entities */
import Button from '../../components/Button/Button.jsx';
const BlogIdea = () => {
  return (
    <div className="p-2">
      <h1 className="text-3xl font-semibold font-Comfortaa  text-gray-200">
        What is a blog in quote application?{" "}
      </h1>
      <div className="m-5">
        <span className="border-b-2 border-gray-400 text-2xl text-gray-400 p-1 px-5">
          OK Now i tell you what is the blog section works in quote application.
        </span>
        <div className="mt-10">
          <p className="text-gray-200 text-2xl ">
            It was been added for the creator's can write a blog post about the
            successful peopeles in the world . They put the blog about their
            life style , daily works, hard works, etc...
          </p>
          <p className="text-3xl mt-5">took the basic example.. </p>
        </div> 
        <div className="mt-6">
          <h3 className="text-3xl">
            The making of
            <span className="text-2xl text-gray-200 font-medium m-2">
              Elon Musk: becoming the most influential person in history
            </span>
          </h3>
          <div>
            <img
              src="https://media.npr.org/assets/img/2022/06/01/ap22146727679490-6b4aeaa7fd9c9b23d41bbdf9711ba54ba1e7b3ae-s800-c85.webp"
              alt="404 module not found!"
              className="w-96 m-3 rounded-xl max-lg:w-full"
            />
          </div>
          <h2 className="text-2xl text-gray-400 font-medium">
            Let's describe full blogpost.
          </h2>
          <h1 className="text-2xl mt-4">
            Elon Musk is a man with several missions. Here, Jack Delosa explains
            how he is taking on the aerospace industry, the aviation giants, the
            energy utilities, the oil companies and the car giants of the auto
            industry . . . and winning. Last week, Musk’s Model 3 Tesla was
            unveiled. The mass-market electric car has pre-sold more than
            325,000 units, set to be delivered in the next two years. These
            numbers mean the company has implied future sales of $14 billion
            making it the largest one-week product launch of all time. Tesla,
            however, being a company driven by a larger purpose has said on its
            website, “Most importantly, we are taking a huge step towards a
            better future by accelerating the transition to sustainable
            transportation.”
          </h1>
        </div>
        <div className="flex m-10 items-center justify-evenly max-lg:flex-col gap-5">
          <Button title={"Helpfull" } icon={"fa-solid fa-badge-check "} background="#22c55e" sendLink="/thanks-for-review"/>  
          <Button title={"Not useful" } icon={"fa-sharp fa-solid fa-heart-crack"} background="#ef4444" sendLink={"/tellusyour-bad-experience"} />    
        </div>
        {/* close */}
      </div>
    </div>
  );
};

export default BlogIdea;
