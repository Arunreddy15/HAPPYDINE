import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LANDING } from "./routes";

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={LANDING} replace />;
  }

  return children;
};

export default PublicRoute;
