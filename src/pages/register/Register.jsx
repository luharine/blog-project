import "./register.css"


import ParticlesBg from 'particles-bg'

export default function Register() {
    return (
       <> <div class = "register">
           <span className="registertitle">Register</span> 
            <form  className="registerform">
              <label>Username</label>
              <input class="registerinput" type="text" placeholder="Enter the Username"></input>
              <label>Email</label>
              <input class="registerinput" type="email" placeholder="Enter the Email id"></input>
              <label>Password</label>
              <input class = "registerpassword" type="password" placeholder="Enter the password"></input>
              <button class="registerbutton">register</button>
              </form>
            
           
            
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
    )
}
