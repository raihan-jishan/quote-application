/*
  title: App.jsx file, 
  desc : main file for routing, component calling, wrapping file. 
  date: 13 - 9 - 2023.
*/

import AppLayout from "./Layouts/AppLayout.jsx";
import Routes from "./Routes/Routes.jsx";
import PostState from "./context/PostState.jsx";

const App = () => {
  return (
    <div>
      <PostState>
        <AppLayout>
          {/* all routung on the routes folder.. */}
          <Routes />
        </AppLayout>
      </PostState>
    </div>
  );
};

export default App;
