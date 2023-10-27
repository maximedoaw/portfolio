import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope,FaCaretDown } from "react-icons/fa";
import "../css/Login.css"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
function Login() {
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confpassword,setConfPassword] = useState("")
  const handlesubmit = (e) =>{
    e.preventDefault()
    try {
      createUserWithEmailAndPassword(auth,email,password)
      .then(async(res) =>{
        const user = res.user
        await updateProfile(user,{
          displayName:name
        })
        navigate("/Home")
      })
    } catch (error) {
      console.log("An error was happened ",error);
    }
  }
  return (
    <div>
      <div className="container">
      <h1>Welcome to the website Max event</h1>
      <form className="form">
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
            <div className="flex">
            <label>
                <input className="input" type="text" placeholder="" id='name' required onChange={(e) => setName(e.target.value)}/>
                <span>Name</span>
            </label>
    
        </div>  
                
        <label>
            <input className="input" type="email" placeholder="" required onChange={(e) => setEmail(e.target.value)}/>
            <span>Email</span>
        </label> 
            
        <label>
            <input className="input" type="password" placeholder="" required onChange={(e) => setPassword(e.target.value)}/>
            <span>Password</span>
        </label>
        <label>
            <input className="input" type="password" placeholder="" required onChange={(e) => setConfPassword(e.target.value)}/>
            <span>Confirm password</span>
        </label>
        <button className="submit" onClick={handlesubmit}>Submit</button>
        <p className="signin">Already have an acount ? <Link to="/SignIn">Signin</Link> </p>
    </form>
      </div>
    </div>
  )
}

export default Login
