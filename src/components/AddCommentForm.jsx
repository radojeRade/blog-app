import React from "react";

export default function AddCommentForm({ comment, id, setComment, add }) {
  return (
    <div>
      <h4>Leave a comment:</h4>
      <form onSubmit={add}>
        <label>Comment:</label>
        <input
          required
          type="text"
          value={comment.text}
          onChange={({ target }) =>
            setComment({
              ...comment,
              text: target.value,
              createdAt: new Date(),
              postId: id,
            })
          }
        />

        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
