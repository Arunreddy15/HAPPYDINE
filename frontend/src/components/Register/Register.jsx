import { useState ,useEffect} from 'react'
import { User,Mail} from "lucide-react";
import { LuEye , LuEyeClosed } from "react-icons/lu";
import confetti from "canvas-confetti";
import axios from "axios"
import '../Login/Login.css' 
function Register() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [successmsg,setSuccessmsg]=useState('')
  // const [token, setToken] = useState('')
  const [errormsg,setErrormsg]=useState('')
  const [errormsgup,setErrormsgUP]=useState('')
  const [isOn, setIsOn] = useState(true)
  function clearMsg() {
    setTimeout(() => setSuccessmsg(''), 3000);
  }
  const toggle = () => setIsOn(!isOn);
  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.75 ,x:0.25},
      angle:60,
       colors: ["#ec0000ff", "#242424"]

    });
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.75 ,x:0.75},
      angle:120,
      colors: ["#ec0000ff", "#242424"]


    });
  };
  const validateEmail = (value) => {
    // Basic email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };
  useEffect(() => {
    if (username.trim() === "") {
      setErrormsg("");
    }
  }, [username]);
  const RegisterUser = async () => {
    if (username==='' || password==='' || email==='') {
      setErrormsgUP('Fields should not be empty!')
    }
    else{
      if (/^\d+$/.test(username)) {
        setErrormsgUP('Username should contains alphanumeric!')
      }
      else if (email && !validateEmail(email)){
        setErrormsgUP('Please enter valid Email Id!')
      }
      else{
        setErrormsgUP('')
        try {
          const res = await axios.post("http://127.0.0.1:8000/UserRegister", { email,username, password }
          );
          setEmail('');setUsername('');setPassword('')
          if (res.data.message.includes("Success")){
            setSuccessmsg(res.data.message)
            fireConfetti();
            clearMsg()
          }else{
            setSuccessmsg('')
            setErrormsg(res.data.message)
          }
          // setToken(res.data.access_token);
        } catch (err) {
          alert(err.response?.data?.detail || "Error");
        }
      }
    }
  };
  return (
    <>
    <div className="register-form">
      <h3>User Register</h3>
      <div className="userpass_con">
        <input type="email" value={email} className='' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <Mail />
      </div>
      <div className="userpass_con">
        <input type="text"  className='' value={username} placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)}/>
        <User/>
      </div>
      <div className="userpass_con">
        <input type={isOn&&"password"||"text"}  value={password} className='' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={toggle}>{isOn&&< LuEyeClosed size={22}/>||<LuEye size={22}/>}</button>
      </div>
      {successmsg&& <p className='successmsg'>{successmsg}</p>||errormsgup&& <p className='errormsg'>{errormsgup}</p>||<p className='errormsg'>{errormsg}</p>}
      <button className="submitbtn" onClick={RegisterUser}>Submit</button>
    </div>
    </>
  )
}

export default Register
