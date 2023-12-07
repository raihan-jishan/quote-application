import DashLayout from "../../Layouts/DashLayout.jsx";
import Login from "../../authentication/Login.jsx";
import DashInfo from "../../components/DashboardInfoLists/DashInfo.jsx";

// import Login from "./Login";
const Dashboard = () => {
  return (
    <>
      {localStorage.getItem("token") ? (
        <DashLayout>
          <DashInfo />
        </DashLayout>
      ) : (
        <Login dashBoardText=" For access the dashboard" />
      )}
    </>
  );
};

export default Dashboard;
