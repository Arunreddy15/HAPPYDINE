import "./Header.css"
import { NavLink } from "react-router-dom";
function Header(){
    const linkClasses = ({ isActive }) =>
    isActive
      ? "activte"
      : "text-gray-700 hover:text-blue-600 px-3 py-2";

    return(
        <div className="Header-contianer">
            <h2 className="logo">HappyDine</h2>
            <ul>
                <NavLink to="/" className={linkClasses}>
                    Home
                </NavLink>
                <NavLink to="/about" className={linkClasses}>
                    About
                </NavLink>
                <NavLink to="/contact" className={linkClasses}>
                    Contact
                </NavLink>
                {/* <a href=""><li>Home</li></a>
                <a href=""><li>Services</li></a>
                <a href=""><li>About</li></a> */}
            </ul>
            <a href="/UserLogin" className="login">Login</a>
        </div>
    )
}
export default Header