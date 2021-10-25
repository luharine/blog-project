import "./login.css"
import { useContext, useRef } from "react";
import ParticlesBg from 'particles-bg'
import axios from "axios";
import {Context} from "../../context/Context"
import { Link } from "react-router-dom";

import { useDispatch } from 'react';




export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    };
    console.log(isFetching);
    
  
    return (
       <> <div class = "register">
           <span className="registertitle">LOGIN</span> 
            <form  className="registerform" onSubmit={handleSubmit}>

              <label>Username</label>
              <input class="registerinput" type="text" placeholder="Enter your Username" ref={userRef}></input>
              <label>Password</label>
              <input class = "registerpassword" type="password" placeholder="Enter password" ref={passwordRef}></input>
              <button class="registerbutton" type = "submit"   disabled={isFetching} >Login</button>
              </form>
           
              
           
            
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
    )
}
