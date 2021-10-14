import "./login.css"

import ParticlesBg from 'particles-bg'

export default function register() {
    return (
       <> <div class = "register">
           <span className="registertitle">register</span> 
            <form  className="registerform">

              <label>Email</label>
              <input class="registerinput" type="email" placeholder="Enter the Email id"></input>
              <label>Password</label>
              <input class = "registerpassword" type="password" placeholder="Enter password"></input>
              <button class="registerbutton">register</button>
              </form>
              <button class="registerregister">Register</button>
           
            
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
    )
}
