import {Login} from "../modules/index.jsx";


// eslint-disable-next-line react/prop-types
const RequiredAuthToken = ({children}) => {
  return (
    <>
     {localStorage.getItem("token") ? (
     {children}
      ) : (
        <Login dashBoardText=" For access the dashboard" />
      )}
    </>
  )
}

export default RequiredAuthToken;