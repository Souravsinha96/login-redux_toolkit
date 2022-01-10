import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const AuthorizedRoute = () => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.user);
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default AuthorizedRoute;
