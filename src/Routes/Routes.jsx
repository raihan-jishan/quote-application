/*
    title: Routes file for whole application routing related works. 
    desc: It was helps to organized all routes from app.jsx file.
    date: 5 - 12 - 2023. 
*/
import { Route, Routes as Router } from "react-router-dom";
import {
  BecomeCreator,
  Dashboard,
  GetRequestedQuotes,
  Home,
  Login,
  Profile,
  Signup,
  Topic,
  Topquotes,
  BecomeaBloger,
  Ilustration,
  AddTask,
  LoginSuccess,
  PageNotFound,
  AlreadyExist,
  Logout,
  LoginFaild,
  Notification,
  BlogIdea,
  BlogAdded,
  TermsAndConditions,
  BlogPosts,
} from "../modules/index.jsx";
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/top-quotes" element={<Topquotes />} />
      <Route path="/topic" element={<Topic />} />
      <Route path="/becomecreator" element={<BecomeCreator />} />
      <Route path="/becomeabloger" element={<BecomeaBloger />} />
      <Route path="/blogposts" element={<BlogPosts />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/account" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogidea" element={<BlogIdea />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/auth-success"
        element={
          <Notification
            MainTitle="congratulations"
            subTitle="your account created successful!"
            buttonTitle="Dashboard"
            buttonSendLink="/dashboard"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={Ilustration}
          />
        }
      />
      <Route
        path="/success-to-deletepost"
        element={
          <Notification
            MainTitle="Success!"
            subTitle="To delete the quotes..."
            buttonTitle="Add Quote"
            buttonSendLink="/becomecreator"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={Ilustration}
          />
        }
      />
      <Route
        path="/auth-warning"
        element={
          <Notification
            MainTitle="Sorry!"
            subTitle="this email with that user already exist! Try onother email and user name. "
            buttonTitle="Signup"
            buttonSendLink="/account"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={AlreadyExist}
          />
        }
      />
      <Route
        path="/login-success"
        element={
          <Notification
            MainTitle="Success!"
            subTitle="Your login success with the currect informations. "
            buttonTitle="Dashboard"
            buttonSendLink="/dashboard"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={LoginSuccess}
          />
        }
      />
      <Route
        path="/quote-added"
        element={
          <Notification
            MainTitle="Success! To add a Quote in the database.."
            subTitle="Tap to the button navigate to pages..."
            buttonTitle="Dashboard"
            buttonSendLink="/dashboard"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={AddTask}
          />
        }
      />
      <Route
        path="/logout-success"
        element={
          <Notification
            MainTitle="Success! To Logout..."
            subTitle="Tap on the login button for come-back in your application."
            buttonTitle="LogIn"
            buttonSendLink="/login"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={Logout}
          />
        }
      />
      <Route
        path="/blogadded-success"
        element={
          <Notification
            MainTitle="Success! To Add Blog ..."
            subTitle="Tap on the button to view it ."
            buttonTitle="Blogs"
            buttonSendLink="/blogposts"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={BlogAdded}
          />
        }
      />
      <Route
        path="/thanks-for-review"
        element={
          <Notification
            MainTitle="Thanks for your valuable poul..."
            subTitle="Keep supporting us reading quotes... And Self motivate..."
            buttonTitle="Quotes"
            buttonSendLink="/"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={BlogAdded}
          />
        }
      />
      <Route
        path="/tellusyour-bad-experience"
        element={
          <Notification
            MainTitle="Sorry for bad experience ... "
            subTitle="Please tell us your experience and your query.... on gmail raihanjishan2131@gmail.com"
            buttonTitle="Home"
            buttonSendLink="/"
            secondButtonTitle="Logout"
            secondButtonSendLink="/profile"
            SVG={LoginFaild}
          />
        }
      />
      <Route
        path="/login-warning"
        element={
          <Notification
            MainTitle="Sorry!"
            subTitle="Your Informations are invalid. Please provide valid information. And Try Again.... "
            buttonTitle="Try again"
            buttonSendLink="/login"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={LoginFaild}
          />
        }
      />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route
        path="*"
        element={
          <Notification
            MainTitle="Sorry!"
            subTitle="Which page are you searching, it was not included in this website. Go other pages"
            buttonTitle="Quotes"
            buttonSendLink="/"
            secondButtonTitle="Home"
            secondButtonSendLink="/"
            SVG={PageNotFound}
          />
        }
      />
      <Route
        path="/motivational"
        element={<GetRequestedQuotes category="motivational" />}
      />
      <Route
        path="/inspirational"
        element={<GetRequestedQuotes category="Inspirational" />}
      />
      <Route
        path="/positive"
        element={<GetRequestedQuotes category="Positive" />}
      />
      <Route path="/life" element={<GetRequestedQuotes category="Life" />} />

      <Route path="/music" element={<GetRequestedQuotes category="Music" />} />
      <Route
        path="/billionaire"
        element={<GetRequestedQuotes category="Billionaire" />}
      />
      <Route
        path="/legend"
        element={<GetRequestedQuotes category="Legend" />}
      />
      <Route path="/alone" element={<GetRequestedQuotes category="Alone" />} />
    </Router>
  );
};

export default Routes;
