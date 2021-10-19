import { useLocation } from "react-router"
import Sbar from "../../sbar/Sbar"
import SinglePost from "../../singlePost/SinglePost"
import "./single.css"

export default function Single() {
    const location=useLocation()
    const path=location.pathname.split("/")[2];
    return (
        <div className="single">
            <SinglePost/>
            <Sbar/>
        </div>
    )
}
