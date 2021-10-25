import { useState ,useContext} from "react"
import "./write.css"
import axios from "axios";
import {Context} from "../../context/Context"

export default function Write() {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const {user} = useContext(Context);
    const handleSubmit =async (e) => {
        e.preventDefault();
        const newpost = {

            username:user.username,
            title,
            desc
        }
        if(file){
            const data = FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("name",file);
            newpost.photo = filename;
        try{
            await axios.post("/upload",data);
        }
        catch{err}


        }
        axios.post("./posts")

    }


    return (
        <div className="write" >
            <img className="writeImg" src="/images/81FqFFFzdGL.jpg" alt=""/>
            <form className="writeForm" onSubmit = {handleSubmit}>
                <div className="writeFormGroup"> 
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>{""}
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" className="writeInput" placeholder="Title" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Write your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit" type = "submit">Publish</button>

            </form>
            
        </div>
    )
}
