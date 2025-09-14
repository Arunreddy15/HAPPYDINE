import {LOGIN} from '../../routes/AppRoutes'
import {  useNavigate } from 'react-router-dom'
import Logo from "../Login/Logo";
import './HeaderOpt.css'
export default function HeaderOpt() {
    const navigate = useNavigate()
    const LoginUser = ()=>{
        localStorage.removeItem('token')
        navigate(LOGIN)
    }
  return (
    <div className='headeropt'>
        <div className="headeropt-inner-container">
            <Logo/>
            <ul>
                
                <li><a href="#features">Features</a></li>
                <li><a href="#howitwork">Howitwork</a></li>
                <li><a href="#restaurants">Restaurants</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a onClick={LoginUser} className="login">Logout</a>
        </div>
    </div>
  )
}
