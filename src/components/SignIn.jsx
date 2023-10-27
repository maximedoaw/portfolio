import React, { useState } from 'react'
import "../css/SignIn.css"
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
function SignIn() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handlesubmit = (e) =>{
    e.preventDefault()
    try {
      signInWithEmailAndPassword(auth,email,password)
      .then(async(res) =>{ 
         navigate("/Home")
      })
    } catch (error) {
      console.log("An error was happened ",error);
    }
  }
  return (
    <div>
          <form className="form">
            <p className="form-title">Sign in to your account</p>
              <div className="input-container">
                <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                <span>
                </span>
            </div>
            <div className="input-container">
                <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button type="submit" className="submit" onClick={handlesubmit}>
              Sign in
            </button>

            <p className="signup-link">
              No account?
              <Link to="/">Login</Link>
            </p>
          </form>

    </div>
  )
}

export default SignIn
