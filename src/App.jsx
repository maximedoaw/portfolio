import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignIn from './components/SignIn'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import { auth } from './firebase';
function App() {
  const [userName,setUserName] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user) =>{
      if(user){
        setUserName(user.displayName)
      } else setUserName("")
      console.log(user);
    })
  },[])
  return (
    <div>

    <Router>
          <Routes>
            <Route path='' element={<Login/>}/>   
            <Route path='/SignIn' element={<SignIn/>}/>  
            <Route path='/Home' element={<Home name={userName}/>}/>    
          </Routes>
    </Router>
    </div>

  )
}

export default App