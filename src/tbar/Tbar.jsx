import { Link } from "react-router-dom"
import "./tbar.css"

export default function Tbar() {
    const user=true;
    return (
        <div class = 'Tbar'>
                
               
                   <div class="left">
                       <div class="top-icons">
                                     <i class="top-icon fab fa-discord"></i>
                                     <i class="top-icon fab fa-twitter"></i>
                                     <i class="top-icon fab fa-pinterest-p"></i> 
                                     <i class="top-icon fab fa-reddit-alien"></i>
                                     <i class="top-icon fab fa-instagram"></i>
                        </div>
                   </div>
                   <div class="centre">
                                  <ul class="top-center-list" horizontal>
                                       <li class = "top-center-list-item">
                                           <Link className="link" to="/">HOME</Link>
                                       </li>
                                       <li class = "top-center-list-item">
                                        <Link className="link" to="/">ABOUT</Link>
                                       </li>
                                       <li class = "top-center-list-item">
                                        <Link className="link" to="/">CONTACT</Link>
                                       </li>
                                       <li class = "top-center-list-item">
                                        <Link className="link" to="/write">WRITE</Link>
                                       </li>
                                       <li class = "top-center-list-item">{user? "LOGOUT":""}</li>  
                                  </ul>  


                   </div>
                   <div class = "right">
                       <div> {user?( <img   className="top-img" src = "/images/girl.jpg" alt="a beautiful girl"/>):<><Link className="link top-center-list-item" to="/Login">Login</Link><Link className=" link top-center-list-item" to="/register">Register</Link></>}

                       
                        <i class="searchicon fas fa-search"></i>

                        </div>
                    </div>
                
        </div>
    )
}
