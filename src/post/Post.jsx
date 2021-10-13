import "./post.css"

export default function post() {
    return (
        <div className="post">
        <img
          className="postImg"
          src="/images/81FqFFFzdGL.jpg"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
              Anime
            </span>
            <span className="postCat">
              Music
            </span>
          </div>
          <span className="postTitle">
              Blue period-ANime
          </span>

          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Second-year high school student Yatora Yaguchi is bored with his normal life. He studies well and plays around with his friends, but in truth, he does not enjoy either of those activities. Bound by norms, he secretly envies those who do things differently.
        </p>
      
      </div>
    )
}
