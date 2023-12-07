import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Submitbtn from "../Button/Submitbtn";
import AccountInfo from "../Infos/AccountInfo";
const SignupForm = () => {
  const [signup, SetSignup] = useState({
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  });
  // initailize server backend
  const server = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, imageUrl } = signup;
    const response = await fetch(`${server}/api/auth/createaccount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, imageUrl }),
    });
    const json = await response.json();
    console.log(json);
    // save the auth token in the browser console or something went wrong navigate auth-warning page... 
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/auth-success");
    } else {
      navigate("/auth-warning");
    }
  };
  const onChange = (e) => {
    SetSignup({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0">
      <div className="w-full ">
        <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="mt-5">
              <label
                htmlFor="email"
                className="block mb-2  font-Comfortaa font-medium text-gray-200 text-3xl"
              >
                Your name`` <i className="fa-light fa-file-signature"></i>
              </label>
              <input
                onChange={onChange}
                type="text"
                name="name"
                id="name"
                className="mt-4  text-2xl bg-gray-50 border border-gray-300 text-white sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your name . . ."
                required
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="email"
                className="block mb-2  font-Comfortaa font-medium text-gray-200 text-3xl"
              >
                Your email{" "}
                <i className="fa-regular fa-envelope-circle-check"></i>
              </label>
              <input
                onChange={onChange}
                type="email"
                name="email"
                id="email"
                className="mt-4  text-2xl bg-gray-50 border border-gray-300 text-white sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your email .  .  . ."
                required
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="email"
                className="block mb-2  font-Montserrat  text-gray-200 text-3xl font-semibold"
              >
                image url for profile <i className="fa-light fa-image"></i>
              </label>
              <input
                onChange={onChange}
                type="text"
                name="imageUrl"
                id="imageUrl"
                className="mt-4  text-2xl bg-gray-50 border border-gray-300 text-white sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="image url for your profile .  .  . ."
                required
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="password"
                className="block mb-2  font-Comfortaa font-medium text-gray-200 text-3xl"
              >
                Password <i className="fa-light fa-lock"></i>
              </label>
              <input
                onChange={onChange}
                type="password"
                name="password"
                id="password"
                placeholder=" • • • • • • • •"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="confirm-password"
                className="block mb-2  font-Comfortaa font-medium text-gray-200 text-3xl"
              >
                Confirm password <i className="fa-sharp fa-regular fa-key"></i>
              </label>
              <input
                onChange={onChange}
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder=" • • • • • • • •"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  onChange={onChange}
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-700 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-lg font-Comfortaa">
                <label htmlFor="terms" className="font-light text-gray-300  ">
                  I accept the{" "}
                  <Link
                    className="font-medium text-gray-400 hover:underline "
                    to={'/terms-and-conditions'}
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            {/* <i className=""></i> */}
            <Submitbtn
              title="Create an account "
              icon="fa-light fa-receipt"
              color="black"
            />
            <AccountInfo
              sendLink="/login"
              text="Login"
              topText="Already have an account?"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
