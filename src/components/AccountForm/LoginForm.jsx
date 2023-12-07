import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Submitbtn from "../Button/Submitbtn";
import AccountInfo from "../Infos/AccountInfo";
const LoginForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [login, SetLogin] = useState({
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  });
    // initailize server backend
    const server = (import.meta.env.VITE_BACKEND_URL);
  const navigate = useNavigate();
  const onChange = (e) => {
    SetLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, imageUrl } = login;
    const response = await fetch(`${server}/api/auth/login`, {
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
    // navigate   by pushing path
    navigate("/login-success");
  }else {
    navigate("/login-warning"); 
  }
  };

  return (
    <div className="flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0">
      <div className="w-full ">
        <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" action="#">
            <div className="mt-5">
              <label
                htmlFor="email"
                className="block mb-2  font-Comfortaa font-medium text-gray-400 text-3xl"
              >
                Your email <i className="fa-regular fa-envelope-circle-check"></i>
              </label>
              <input
                type="email"
                name="email"
                value={login.email}
                onChange={onChange}
                id="email"
                className="mt-4  text-2xl bg-gray-50 border border-gray-300 text-white sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your email .  .  . ."
                required=""
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="password"
                className="block mb-2  font-Comfortaa font-medium text-gray-400 text-3xl"
              >
                Password <i className="fa-light fa-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={login.password}
                onChange={onChange}
                placeholder=" • • • • • • • •"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="confirm-password"
                className="block mb-2  font-Comfortaa font-medium text-gray-400 text-3xl"
              >
                Confirm password <i className="fa-sharp fa-regular fa-key"></i>
              </label>
              <input
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
           
            <Submitbtn title="Login account " color="black" icon="fa-light fa-receipt"
            Submit={handleSubmit}
            />
            <AccountInfo
              sendLink="/account"
              text="Sigup"
              topText="doesn't have any account?"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
