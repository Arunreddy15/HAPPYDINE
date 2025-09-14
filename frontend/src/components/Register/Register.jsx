import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { User,Mail} from "lucide-react";
import { LuEye , LuEyeClosed } from "react-icons/lu";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {LOGIN} from '../../routes/AppRoutes'
import {URL,USERREGISTER} from '../../routes/AppUrls'
import axios from "axios"
import { toast } from "react-toastify";
import { allowOnlyAlphanumeric } from '../../utils/InputValidation';
import Meal from "../../assets/meal.jpg"
import { fireConfetti } from '../../utils/Confetti'; 
import '../Login/Login.css' 
function Register() {
  const [newuser, setNewuser]=useState({
    email:'',username:'',password:''
  })
  const [isOn, setIsOn] = useState(true)
  const toggle = () => setIsOn(!isOn);
  const navigate = useNavigate()
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };
  
  const RegisterUser = async () => {
    if (newuser.username==='' || newuser.password==='' || newuser.email==='') {
      toast.error('Fields should not be empty!')
    }
    else{
      if (newuser.email && !validateEmail(newuser.email)){
        toast.error('Please enter valid Email Id!')
      }
      else{
        try {
          const res = await axios.post(`${URL}${USERREGISTER}`, { email:newuser.email,username:newuser.username, password:newuser.password }
          );
          if (res.data.message.includes("Success")){
            toast.success(res.data.message)
            fireConfetti()
            navigate(LOGIN)
          }else{
            toast.error(res.data.message)
          }
          // setToken(res.data.access_token);
        } catch (err) {
          alert(err.response?.data?.detail || "Error");
        }
      }
    }
  };

  return (
    <div className='Register-container'>
      <div className='Inner-container'>
      
        <img src='https://i.postimg.cc/7ZQ1PVjK/register.jpg' className='side-image'/>
        {/* <img src='https://images.unsplash.com/photo-1727404679933-99daa2a7573a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='side-image'/> */}
        <div className="right_side">
          <div className="register-form">
            <h3>Sign Up Here!</h3>
            <span>Join us today to explore amazing features.</span>
            <div className="userpass_con">
              <input type="email" value={newuser.email} className='' placeholder='Email' onChange={(e)=>setNewuser({...newuser,email:e.target.value})}/>
              <Mail className='icons' />
            </div>
            <div className="userpass_con">
              <input type="text"  className='' value={newuser.username} placeholder='Username' onChange={(e)=>setNewuser({...newuser,username:e.target.value})} onKeyPress={allowOnlyAlphanumeric}/>
              <User className='icons'/>
            </div>
            <div className="userpass_con">
              <input type={isOn&&"password"||"text"}  value={newuser.password} className='' placeholder='Password' onChange={(e)=>setNewuser({...newuser,password:e.target.value})}/>
              <button onClick={toggle}>{isOn&&< LuEyeClosed size={22} className='icons'/>||<LuEye size={22} className='icons'/>}</button>
            </div>
            <button className="submitbtn" onClick={RegisterUser}>Submit</button>
            <span>or signup with</span>
            <div className='social-icons-parent'>
              <div className='social-icons'><FaGoogle size={20} /></div>
              <div className='social-icons'><FaFacebook size={22}/></div>
            </div>
            {/* <button className="submitbtn Gg" > <FaGoogle/> Google</button>
            <button className="submitbtn Fb" ><FaFacebook/> Facebook</button> */}
                        
            <span>Already have an account? <Link to={LOGIN} className='links-lr'>Sign In</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
