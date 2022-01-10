import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Home.css";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <Header />
      Home
      <Link to="/product">Product</Link>
    </div>
  );
};

export default Home;
