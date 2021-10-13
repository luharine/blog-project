import "./sbar.css"

export default function Sbar() {
    return (

        
        <div class = "sbar">
            
                <span class = "sbar-title">ABOUT ME</span>
                <div class = "sbar-item">
                <img class = "sbar-img" src="/images/girl.jpg" alt="img"></img>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book.</p>
            </div>
               
               <div class = "sbar-item">
                   <span class = "sbar-title">CATEGORIES</span>
                   <ul class= "sbar-list">
                       <li class="sbar-list-item">LIFE</li>
                       <li class="sbar-list-item">MUSIC</li>
                       <li class="sbar-list-item">ART</li>
                       <li class="sbar-list-item">SPORTS</li>
                       <li class="sbar-list-item">CINEMA</li>
                       <li class="sbar-list-item">TECH</li>
                   </ul>
                   </div>

                <div>
                   <div className="sbar-item"><span>Catch on  
                       <i class="sbaritemfollow fab fa-connectdevelop"></i></span></div>
                       
                       <div className="sbar-social">
                                    <i class="sbar-icon fab fa-discord"></i>
                                     <i class="sbar-icon fab fa-twitter"></i>
                                     <i class="sbar-icon fab fa-pinterest-p"></i> 
                                     <i class="sbar-icon fab fa-reddit-alien"></i>
                                     <i class="sbar-icon fab fa-instagram"></i>

                        </div>
                    </div>
                    </div>   
            
    )
}
