import { useState ,useEffect} from 'react'
import { User,  } from "lucide-react";
import { LuEye , LuEyeClosed } from "react-icons/lu";
import axios from "axios"
import './Login.css'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [successmsg,setSuccessmsg]=useState('')
  // const [token, setToken] = useState('')
  const [errormsg,setErrormsg]=useState('')
  const [errormsgup,setErrormsgUP]=useState('')
  const [isOn, setIsOn] = useState(true)
  const toggle = () => setIsOn(!isOn);
  function clearMsg() {
    setTimeout(() => setSuccessmsg(''), 3000);
  }
  useEffect(() => {
    if (username.trim() === "" && password !=='') {
      setErrormsg("");
      clearMsg()
    }
  }, [username]);
  const LoginUser = async () => {
    if (username==='' || password==='') {
      setErrormsgUP('Username and Password should not be empty')
    }
    else{
      if (/^\d+$/.test(username)) {
        setErrormsgUP('Username should contains alphanumeric')
      }
      else{
        setErrormsgUP('')
        try {
          const body ={ username: username, password }
          const res = await axios.post("http://127.0.0.1:8000/UserLogin", 
            body
          );
          setUsername('');setPassword('')
          if (res.data.message.includes("Success")){
            setSuccessmsg(res.data.message)
            clearMsg()
          }
          else{
            console.log(res.data.message)
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
    <div className="login-form">
      <h3>User Login</h3>
      <div className="userpass_con">
        <input type="text"  value={username} className='' placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)}/>
        <User/>
      </div>
      <div className="userpass_con">
        <input type={isOn&&"password"||"text"}  value={password} className='' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={toggle}>{isOn&&< LuEyeClosed size={22}/>||<LuEye size={22}/>}</button>
      </div>
      {successmsg?(<p className='successmsg'>{successmsg}</p>):(errormsgup&& <p className='errormsg'>{errormsgup}</p>||<p className='errormsg'>{errormsg}</p>)}
      <button className="submitbtn" onClick={LoginUser}>Submit</button>
    </div>
    </>
  )
}

export default Login
