import Header from "../../header/Header"
import Posts from "../../posts/Posts";
import Sbar from "../../sbar/Sbar";
import Tbar from "../../tbar/Tbar";
import "./home.css"

export default function home() {
    return (
        <>
        <Tbar/>
        <Header />
        <Sbar/>
        <div className="home">
          <Posts/>
        </div>
      </>
    );
}