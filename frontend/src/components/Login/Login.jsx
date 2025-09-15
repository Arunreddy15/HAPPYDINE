import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from "lucide-react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { allowOnlyAlphanumeric } from '../../utils/InputValidation';
import { REGISTER, LANDING } from '../../routes/AppRoutes'
import { URL, USERLOGIN } from '../../routes/AppUrls'
import { toast } from "react-toastify";
import axios from "axios"
import Pasta from "../../assets/chickenidle.jpg"
import './Login.css'
import { en } from '../../i18n/content';
import Image from '../Image/Image';

function Login() {
  const [user, setUser] = useState({username: '', password: ''})
  const [isOn, setIsOn] = useState(true);
  const toggle = () => setIsOn(!isOn);
  const navigate = useNavigate()

  const LoginUser = async () => {
    if (user.username === '' || user.password === '') {
      toast.error(`${en.validations.usernamePasswordRequired}`)
    }
    else {
      try {
        const body = new URLSearchParams({ username: user.username, password: user.password })
        const res = await axios.post(`${URL}${USERLOGIN}`, body);
        setUser({ username: '', password: '' })
        if (res.data.message.includes("Success")) {
          toast.success(res.data.message)
          localStorage.setItem("token", res.data.access_token)
          console.log(res.data.access_token)
          navigate(LANDING)
        } else {
          toast.error(res.data.message)
        }
      } catch (err) {
        alert(err.response?.data?.detail || "Error");
      }
    }
  };

  return (
    <div className='Login-container'>
      <div className='Inner-container'>
        <div className="right_side">
          <div className="login-form">
            <h3>{en.text.welcome}</h3>
            <span>{en.text.loginInstructions}</span>
            <div className="form-group">
              <input
                type="text"
                value={user.username}
                placeholder='Username'
                onChange={(e) => setUser({ ...user, username: e.target.value })} 
                onKeyPress={allowOnlyAlphanumeric}
              />
              <User className='icons'/>
            </div>
            <div className="form-group">
              <input
                type={isOn ? "password" : "text"} 
                value={user.password}
                placeholder='Password'
                onChange={(e) => setUser({ ...user, password: e.target.value })} 
              />
              <button type="button" onClick={toggle}>
                {isOn ? <LuEyeClosed size={22} className='icons'/> : <LuEye size={22} className='icons' />}
              </button>
            </div>
            <Link to={REGISTER} className='links-lr forgotPwd'><span>{en.buttons.forgotPassword}</span></Link>
            <button className="submitBtn" onClick={LoginUser}>{en.buttons.submit}</button>
            <span>{en.text.loginText}</span>
            <div className='social-icons-parent'>
              <div className='social-icons'><FaGoogle size={20} /></div>
              <div className='social-icons'><FaFacebook size={22}/></div>
            </div>
            <span>{en.text.accountInstructions}<Link to={REGISTER} className='links-lr'>{en.buttons.signUp}</Link></span>
          </div>
        </div>
        <Image source={Pasta} className='side-image' />
      </div>
    </div>
  )
}

export default Login
