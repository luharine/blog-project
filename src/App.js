import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Tbar from "./tbar/Tbar";
import Login from "./pages/Login/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 function App() {
  const user=true;
  return (
    <Router>
    
    <Tbar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/register">
        {user?<Home/>:<Register/>}
      </Route>
      <Route path="/Login">
        {user?<Home/>:<Login/>}
        </Route>
      <Route path="/write">
      {user?<Write/>:<Register/>}
      </Route>
      <Route path="/setting">
      {user?<Setting/>:<Register/>}
      </Route>
      <Route path="/post/:postId">
        <Single/>
      </Route>
    </Switch>
 
    </Router>
  );
}

export default App;
