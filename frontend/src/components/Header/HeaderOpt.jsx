import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { LOGIN } from "../../routes/routes";
import Logo from "../Logo/Logo";
import "./HeaderOpt.css";
export default function HeaderOpt() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
    navigate(LOGIN);
  };
  return (
    <div className="headeropt">
      <div className="headeropt-inner-container">
        <Logo />
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#howitwork">Howitwork</a>
          </li>
          <li>
            <a href="#restaurants">Restaurants</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a onClick={() => logOut()} className="login">
          Logout
        </a>
      </div>
    </div>
  );
}
