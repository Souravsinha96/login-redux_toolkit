import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Loader from "./components/loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthorizedRoute from "./components/AuthorizedRoute";
import Products from "./pages/prdoucts/Products";
import SelectedProduct from "./pages/selectedProduct/SelectedProduct";
import "./App.css";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Loader />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AuthorizedRoute />}>
            <Route
              path="home"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              path="products"
              element={
                <>
                  <Header />
                  <Products />
                </>
              }
            />
            <Route
              path="products/:id"
              element={
                <>
                  <Header />
                  <SelectedProduct />
                </>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
