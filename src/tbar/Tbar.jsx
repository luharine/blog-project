import "./tbar.css"

export default function Tbar() {
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
                                       <li class = "top-center-list-item">HOME</li>
                                       <li class = "top-center-list-item">ABOUT</li>
                                       <li class = "top-center-list-item">CONTACT</li>
                                       <li class = "top-center-list-item">INK</li>
                                       <li class = "top-center-list-item">LOGOUT</li>  
                                  </ul>  


                   </div>
                   <div class = "right">
                       <div>
                        <img className="top-img" src = "/images/girl.jpg" alt="a beautiful girl"/>
                        <i class="searchicon fas fa-search"></i>
                        </div>
                    </div>
                
        </div>
    )
}
