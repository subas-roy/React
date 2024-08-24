import "./Post.css";

export default function Post({post}) {
  const {title, userId, id, body} = post;
  return (
    <div className="post">
      <p>UserId: {userId}</p>
      <p>Id: {id}</p>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
    </div>
  )
}