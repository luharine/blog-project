import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../header/Header"
import Posts from "../../posts/Posts";
import Sbar from "../../sbar/Sbar";
import "./home.css"

export default function Home() {

  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=await axios.get("/posts");
      setPosts(res.data);
    }
    fetchPosts();
  },[])

    return (    
    <>
      <Header />    
        
        <div className="home">
          <Posts posts={posts}/>
          <Sbar/>
        </div>
        </>
     
    );
}
