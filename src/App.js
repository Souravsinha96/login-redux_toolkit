import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Loader from "./components/loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/Store.js";
function App() {
  return (
    <Provider store={store}>
      {/* <Loader /> */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        pauseOnFocusLoss
      />

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
