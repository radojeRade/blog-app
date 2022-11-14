import React from "react";

export default function SinglePostComponent({
  id,
  post,
  comments,
  formatedDate,
  removeComment,
  editComment,
  evFun
}) {
  return (
    <div>
      <h3>Title is: {post.title}</h3>
      <p>{post.text}</p>
      <br></br>
      <p>{formatedDate ? formatedDate : post.createdAt}</p>
      <h5>Comments:</h5>
      <ul>
        {comments &&
          comments.map((comment) => (
            
            <li key={comment.id} onClick = {()=>evFun(comment.id)}>
              {comment.text}
              <button onClick={() => removeComment(comment.id)}>
                Remove comment
              </button>
              <button onClick={() => editComment(comment.id)}>
                Edit comment
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
