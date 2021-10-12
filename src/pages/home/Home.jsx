import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sbar from "../../sbar/Sbar"
import "./home.css"




export default function home() {
    return (
      <>   
        <Header />

        <div className="home">
            
           <Posts/>
           <Sbar/>
            
            Homepage
        </div>
        </>
    )
}
