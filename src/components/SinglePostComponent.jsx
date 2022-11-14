import React from "react";

export default function SinglePostComponent({ post, comments, formatedDate }) {
  return (
    <div>
      <h3>Title is: {post.title}</h3>
      <p>{post.text}</p>
      <br></br>
      <p>{formatedDate ? formatedDate : post.createdAt}</p>
      <h5>Comments:</h5>
      <ul>
        <li>
          {comments &&
            comments.map((comment) => <p key={comment.id}>{comment.text}</p>)}
        </li>
      </ul>
    </div>
  );
}
