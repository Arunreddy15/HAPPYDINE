import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { User,Mail} from "lucide-react";
import { LuEye , LuEyeClosed } from "react-icons/lu";
import {LOGIN} from '../../routes/AppRoutes'
import {URL,USERREGISTER} from '../../routes/AppUrls'
import axios from "axios"
import { toast } from "react-toastify";
import { allowOnlyAlphanumeric } from '../../utils/InputValidation';
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
    <div className="register-form">
      <h3>Sign Up Here!</h3>
      <div className="userpass_con">
        <input type="email" value={newuser.email} className='' placeholder='Enter Email' onChange={(e)=>setNewuser({...newuser,email:e.target.value})}/>
        <Mail />
      </div>
      <div className="userpass_con">
        <input type="text"  className='' value={newuser.username} placeholder='Enter Username' onChange={(e)=>setNewuser({...newuser,username:e.target.value})} onKeyPress={allowOnlyAlphanumeric}/>
        <User/>
      </div>
      <div className="userpass_con">
        <input type={isOn&&"password"||"text"}  value={newuser.password} className='' placeholder='Enter Password' onChange={(e)=>setNewuser({...newuser,password:e.target.value})}/>
        <button onClick={toggle}>{isOn&&< LuEyeClosed size={22} color={'#242424'}/>||<LuEye size={22} color={'#242424'}/>}</button>
      </div>
      <button className="submitbtn" onClick={RegisterUser}>Submit</button>
      <span>Already have an account? <Link to={LOGIN}>Sign In</Link></span>
    </div>
    </div>
  )
}

export default Register
