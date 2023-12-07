 
import LoginForm from "../components/AccountForm/LoginForm.jsx";
import LoginpIlustration from "../components/Ilustrations/LoginIlustrations.jsx";
const Login = (props) => {
  // get data by props 
  // eslint-disable-next-line react/prop-types
  const dashBoardText = props.dashBoardText;
  return (
    <main className="m-20 mb-auto max-lg:m-11">
      <h1
        className="text-center text-5xl mt-5 font-Comfortaa font-semibold 
      text-gray-200
      tracking-wide
      bg-gray-950 rounded-xl shadow-sm
      "
      >
      {localStorage.getItem("token") ? (
         <div>
           Login account <i className="fa-light fa-file-user text-gray-600"></i>
         </div>
      ) : (
      <div>
        you must to login <i className="fa-light fa-file-user text-gray-600"></i> 
        {dashBoardText}
      </div>
      )}
      </h1>
      {/* account form */}
      <div className="mt-0  flex items-center justify-between  max-lg:flex-col-reverse w-full max-lg:mt-12 ">
        <LoginForm />

        <LoginpIlustration />
      </div>
    </main>
  );
};

export default Login;
