import "./Header.css"
import { Link, NavLink } from "react-router-dom";
import {REGISTER,LOGIN,HOME,ABOUT} from '../../routes/routes'
function Header(){
    // const linkClasses = ({ isActive }) =>
    // isActive
    //   ? "activte"
    //   : "text-gray-700 hover:text-blue-600 px-3 py-2";

    return(
        <div className="Header-contianer">
            <h2 className="logo">Dineezy</h2>
            {/* <ul> */}
                {/* <NavLink to={HOME} className={linkClasses}>
                    Home
                </NavLink> */}
                {/* <NavLink to={ABOUT} className={linkClasses}>
                    About
                </NavLink> */}
                {/* <NavLink to={CONTACT} className={linkClasses}>
                    Contact
                </NavLink> */}
            {/* </ul> */}
            <Link to={LOGIN} className="login">Login</Link>
        </div>
    )
}
export default Header