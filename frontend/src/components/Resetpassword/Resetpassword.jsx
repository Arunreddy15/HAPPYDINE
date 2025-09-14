import { useState } from 'react'
import axios  from 'axios';
import {  useNavigate } from 'react-router-dom'
import { allowOnlyAlphanumeric } from '../../utils/InputValidation'
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { URL, RESETPASSWORD } from '../../routes/AppUrls'
import { User } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import '../Login/Login.css'
import { LOGIN } from '../../routes/AppRoutes';
export default function Resetpassword() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        c_password:''
      })
    const [isOn, setIsOn] = useState(true)
    const toggle = () => setIsOn(!isOn);
    const navigate = useNavigate()
    const ResetPassword=async()=>{
        if (user.password===user.c_password){
          try{
            const body = new URLSearchParams({ username: user.username,password:user.password })
            const res = await axios.put(`${URL}${RESETPASSWORD}`, body);
            console.log(res.data.message)

            if (res.data.message.includes("Success")) {
              toast.success(res.data.message)
              navigate(LOGIN)
            }
            else {
              toast.error(res.data.message)
            }
          } catch (err) {
            alert(err.response?.data?.detail || "Error");
          }
        }
        else{
          toast.error('Passwords not matched')
        }
    }
  return (
    <div className='Login-container reset-pwd'>
      <div className='Inner-container'>

        <div className="login-form">
            <h3>Reset Password!</h3>
            <span>Enter your new password below to regain access to your account.</span>

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
              <button type="button" onClick={toggle} disabled>
                {isOn ? <LuEyeClosed size={22} className='icons'/> : <LuEye size={22} className='icons' />}
              </button>
            </div>
            <div className="userpass_con">
              <input
                type={isOn ? "password" : "text"} 
                value={user.c_password}
                placeholder='Confirm Password'
                onChange={(e) => setUser({ ...user, c_password: e.target.value })} 
              />
              <button type="button" onClick={toggle}>
                {isOn ? <LuEyeClosed size={22} className='icons'/> : <LuEye size={22} className='icons' />}
              </button>
            </div>
            <button className="submitbtn" onClick={ResetPassword}>Submit</button>
            
            {/* <button className="submitbtn Gg" > <FaGoogle/> Google</button>
            <button className="submitbtn Fb" ><FaFacebook/> Facebook</button> */}
            {/* <span>Did not have an account? <Link to={REGISTER} className='links-lr'>Sign Up</Link></span> */}
        </div>
        <img src='https://i.postimg.cc/fbm65fXv/reset-p.jpg' className='side-image reset-pwd-img'/>
      </div>
    </div>
  )
}
