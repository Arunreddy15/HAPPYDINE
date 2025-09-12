import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from "lucide-react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
<<<<<<< HEAD
import { FaFacebook, FaGoogle } from "react-icons/fa";
=======
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
>>>>>>> 799c49dee698a8f5aabd7abf970b9af932aaaeb6
import { allowOnlyAlphanumeric } from '../../utils/InputValidation';
import { REGISTER, LANDING } from '../../routes/AppRoutes'
import { URL, USERLOGIN } from '../../routes/AppUrls'
import { toast } from "react-toastify";
import axios from "axios"
import Pasta from "../../assets/chickenidle.jpg"
import './Login.css'

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [isOn, setIsOn] = useState(true)
  const toggle = () => setIsOn(!isOn);
  const navigate = useNavigate()
  const LoginUser = async () => {
    if (user.username === '' || user.password === '') {
      toast.error('Username and Password should not be empty')
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
<<<<<<< HEAD

        <img src={Pasta} className='side-image'/>
        <div className="right_side">
          <div className="login-form">
            <h3>Welcome Back!</h3>
            <span>Sign in with your Username and Password.</span>

            <div className="userpass_con">
              <input
                type="text"
                value={user.username}
                placeholder='Username'
                onChange={(e) => setUser({ ...user, username: e.target.value })} 
                onKeyPress={allowOnlyAlphanumeric}
              />
              <User className='icons'/>
            </div>

            <div className="userpass_con">
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
            <Link to={REGISTER} className='links-lr forgotpwd'><span>Forgot Password?</span></Link>
            <button className="submitbtn" onClick={LoginUser}>Submit</button>
            <span>or login with</span>
            <button className="submitbtn Gg" > <FaGoogle/> Google</button>
            <button className="submitbtn Fb" ><FaFacebook/> Facebook</button>
            <span>Did not have an account? <Link to={REGISTER} className='links-lr'>Sign Up</Link></span>
          </div>
        </div>
=======

      <img src={Pasta} className='side-image'/>
      <div className="login-form">
        <h3>Welcome Back!</h3>
        <span>Sing in with your Username and Password.</span>

        <div className="userpass_con">
          <input
            type="text"
            value={user.username}
            placeholder='Username'
            onChange={(e) => setUser({ ...user, username: e.target.value })} 
            onKeyPress={allowOnlyAlphanumeric}
          />
          <User color={'#beb4b4'} />
        </div>

        <div className="userpass_con">
          <input
            type={isOn ? "password" : "text"} 
            value={user.password}
            placeholder='Password'
            onChange={(e) => setUser({ ...user, password: e.target.value })} 
          />
          <button type="button" onClick={toggle}>
            {isOn ? <LuEyeClosed size={22} color={'#beb4b4'} /> : <LuEye size={22} color={'#beb4b4'} />}
          </button>
        </div>
        <span><Link to={REGISTER} className='links-lr forgotpwd'>Forgot Password?</Link></span>
        <button className="submitbtn" onClick={LoginUser}>Submit</button>
        <span>or login with</span>
        <button className="submitbtn Gg" > <FaGoogle/> Google</button>
        <button className="submitbtn Fb" ><FaFacebook/> Facebook</button>
        <span>Did not have an account? <Link to={REGISTER} className='links-lr'>Sign Up</Link></span>
      </div>
>>>>>>> 799c49dee698a8f5aabd7abf970b9af932aaaeb6
      </div>
    </div>
  )
}

export default Login
