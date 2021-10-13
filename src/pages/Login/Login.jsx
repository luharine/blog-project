import "./login.css"
import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

export default function Login() {
    return (
       <> <div class = "login">
           <span className="logintitle">Login</span> 
            <form  className="loginform">

              <label>Email</label>
              <input class="logininput" type="email" placeholder="Enter the Email id"></input>
              <label>Password</label>
              <input class = "loginpassword" type="password" placeholder="Enter password"></input>
              <button class="loginbutton">Login</button>
              </form>
              <button class="loginregister">Register</button>
           
            
        </div>
        <ParticlesBg type="circle" bg={true} />
        </>
    )
}
