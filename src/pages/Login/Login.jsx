import React, { useContext, useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../Firebase"
import { AuthContext } from '../../Context/AuthContest';
const Login = () => {
  const navigate = useNavigate(); 
  const {dispatch}=useContext(AuthContext)
  const handleNavigation = (path) => {
    navigate(path); 
  };
  
  const [error,setError]=useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
    const handleLogin =(e)=>{
           e.preventDefault()     
           signInWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             dispatch({type:"LOGIN",payload: user})
              navigate("/")
             
             // ...
           })
           .catch((error) => {
            setError(true)
           });
  
}
  return (
    <div className="login">
      <form  className="loginform" onSubmit={handleLogin}>
        <div className="logintable">
        <label>Email</label>
        <input  className="loginInput" type="email" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input className="loginInput" type="password"  placeholder="Enter your password" onChange={e=>setPassword(e.target.value)}/>
        <button  type="submit" className="loginbutton">Login</button>
        {error && <span className="wrong">Wrong email or password</span>}
        </div>
      </form>

      <button className="loginRegisterbutton" onClick={() => handleNavigation("/register")}>Register</button>
    </div>
  )
}

export default Login