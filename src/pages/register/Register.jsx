import "./register.css"

import ParticlesBg from 'particles-bg'
import { useState } from "react"
import axios from "axios"

export default function Register() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res= await axios.post("/auth/register",{
                username,
                password,
                email,
            })
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
        }

    }

    return (
       <> <div class = "register">
           <span className="registertitle">Register</span> 
            <form  className="registerform" onSubmit={handleSubmit}>
              <label>Username</label>
              <input className="registerinput" type="text" placeholder="Enter the Username" onChange={e=>setUsername(e.target.value)}></input>
              <label>Email</label>
              <input className="registerinput" type="email" placeholder="Enter the Email id" onChange={e=>setEmail(e.target.value)}></input>
              <label>Password</label>
              <input className = "registerpassword" type="password" placeholder="Enter the password" onChange={e=>setPassword(e.target.value)}></input>
              <button className="registerbutton" type="submit">register</button>
              {error && <span style={{marginTop:"7px"}}>Account already exists</span>}
              </form>
                
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
    )
}
