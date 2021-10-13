import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="/images/81FqFFFzdGL.jpg" alt=""/>
            <form className="writeForm">
                <div className="writeFormGroup"> 
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" className="fileInput" style={{display:"none"}} />
                    <input type="text" className="writeInput" placeholder="Title" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Write your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>

            </form>
            
        </div>
    )
}
