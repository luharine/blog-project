import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router"
import "./singlePost.css"
import {Context} from "../context/Context"


export default function SinglePost() {
    const PF="http://localhost:5000/images/";

    const location=useLocation();
    const path=location.pathname.split("/")[2];
    const [post,setPost]=useState({});
    const {user}=useContext(Context);


    useEffect(()=>{
        const getpost=async ()=>{
            const res=await axios.get("/posts/"+path);
            setPost(res.data);
        }

        getpost();

    },[path]);

    const handleDelete=async ()=>{
        try{
            await axios.delete("/posts/"+path,{username:user.username});
            window.location.replace("");

        }catch(err){

        }
    }
    return (
        <div className="SinglePost">
            <div className="singlePostWrapper">
                {post.photo && (
                     <img
                     className="singlePostImg"
                     src={PF+post.photo}
                     alt=""
                    />                   
                )}
               
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username===user?.username && (
                            <div className="singlePostEdit">
                            <i className="singlePostIcon fas fa-edit"></i>
                            <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
                        </div>

                    )}
                
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>{post.username}</b>

                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
