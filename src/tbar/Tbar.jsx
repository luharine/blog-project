import "./tbar.css"

export default function Tbar() {
    return (
        <div class = 'Tbar'>
                
               
                   <div class="left"><i class="fab fa-discord"></i>
                                     <i class="fab fa-twitter"></i>
                                     <i class="fab fa-pinterest-p"></i> 
                                     <i class="fab fa-reddit-alien"></i>
                                     <i class="fab fa-instagram"></i>
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

                       <img className="top-img" src = "/images/girl.jpg" alt="a beautiful girl"/>
                       
                    </div>
                
        </div>
    )
}
