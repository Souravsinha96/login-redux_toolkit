import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginimg from "../../assets/images/login.svg";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";
import "./Login.css";
import { loading } from "../../redux/slices/loaderSlice";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswdVisible, setisPasswdVisible] = useState(false);
  const from = location.state?.from?.pathname || "/home";
  const creds = {
    username: "S",
    password: "S",
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (creds.username === username && creds.password === password) {
      dispatch(loading(true));
      setTimeout(() => {
        dispatch(login(true));
        dispatch(loading(false));
        navigate(from, { replace: true });
      }, 1000);

      toast.success("Authenticated");
    } else if (username === "" && password === "") {
      toast.error("Please enter  username & password");
    } else {
      toast.error("Please enter correct username & password");
    }
  };
  return (
    <div className="login_bg">
      <div className="login_wrapper">
        <LoginHeader />
        <form onSubmit={handleLogin}>
          <div className="login_content">
            <input
              ref={inputRef}
              className="username"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="password"
              type={isPasswdVisible ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="password_show">
            <input
              id="checkbox"
              type="checkbox"
              value={isPasswdVisible}
              onChange={() => setisPasswdVisible(!isPasswdVisible)}
            />
            <label htmlFor="checkbox">Show Password</label>
          </div>
          <div className="login_button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );

  function LoginHeader() {
    return (
      <div className="login_header">
        <img src={loginimg} alt="login" />
        <h4>Sign In to your account</h4>
      </div>
    );
  }
};

export default Login;
