import { Fragment } from "react";
import Global from "./styles/Global";
import RouterApp from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <Fragment>
      <AppContextProvider>
        <RouterApp />
      </AppContextProvider>
      <Global />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
