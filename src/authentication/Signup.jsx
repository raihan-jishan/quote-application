import AccountForm from "../components/AccountForm/SignupForm";
import SignupIlustration from "../components/Ilustrations/SignupIlustration";
const Signup = () => {
  return (
    // main container
    <main className="m-20 mb-auto max-lg:m-11">
      <h1
        className="text-center text-5xl mt-5 font-Comfortaa font-semibold 
      text-gray-200
      tracking-wide
       bg-gray-950 rounded-xl shadow-sm
      "
      >
        Create a account <i className="fa-light fa-file-user text-gray-600"></i>
      </h1>
      {/* form container */}
      <div className="mt-12  flex items-center justify-center  max-lg:flex-col-reverse w-full  ">
        {/* form */}
        <AccountForm />
        {/* end */}
        {/* Ilustrations  */}
        <SignupIlustration />
        {/* close */}
      </div>
    </main>
  );
};

export default Signup;
