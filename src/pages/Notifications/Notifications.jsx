/* eslint-disable react/prop-types */
import Button from "../../components/Button/Button";
const Notification = (props) => { 
  const SVG = props.SVG;
  const MainTitle = props.MainTitle;
  const subTitle = props.subTitle;
  const buttonTitle = props.buttonTitle;
  const secondButtonTitle = props.secondButtonTitle;
  const buttonSendLink = props.buttonSendLink;
  const secondButtonSendLink = props.secondButtonSendLink;
  return (
    <main className="m-20 mb-auto  ">
      <div className="  flex items-center justify-center  max-lg:flex-col-reverse w-full  ">
        <div className="leading-3">
          <h1 className="text-6xl capitalize  text-gray-200 max-lg:text-4xl shadow-sm font-Montserrat max-lg:mt-3  ">
            {MainTitle}
          </h1>

          <div className="m-2">
            <p className="text-4xl shadow-sm  font-Montserrat mt-10">
              {subTitle}
            </p>
          </div>
          <div className="flex gap-1 max-lg:flex-col w-full mt-10">
            {/*  button */}
            <Button
              title={buttonTitle}
              icon={"fa-light fa-quote-left"}
              background="#16a34a"
              sendLink={buttonSendLink}
            />
            <br />
            <Button
              title={secondButtonTitle}
              icon=" fa-regular fa-book"
              sendLink={secondButtonSendLink}
            />
          </div>
        </div>

        <div className="flex items-end justify-end  ">
          <img
            src={SVG}
            alt="404 module not found!"
            className="w-2/3 max-lg:w-fit rounded-2xl"
          />
        </div>
        {/*  closing */}
      </div>
    </main>
  );
};

export default Notification;
