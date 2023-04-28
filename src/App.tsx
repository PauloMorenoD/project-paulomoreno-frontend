import { ToastContainer } from "react-toastify";
import { RouteComponent } from "./routes/routes";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <RouteComponent/>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
