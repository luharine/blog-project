import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="SinglePost">
            <div className="singlePostWrapper">
                <img
                 className="singlePostImg"
                 src="/images/216866.jpg"
                 alt=""
                />
                <h1 className="singlePostTitle">
                    Blue Period-Anime
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Ishigami</b>

                    </span>
                    <span className="singlePostDate">
                        5mims ago
                    </span>
                </div>
                <p className="singlePostDesc">
                Second-year high school student Yatora Yaguchi is bored with his normal life. He studies well and plays around with his friends, but in truth, he does not enjoy either of those activities. Bound by norms, he secretly envies those who do things differently.
                </p>
            </div>
        </div>
    )
}
