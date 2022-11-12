import React from "react";

export default function SinglePostComponent({post}){

    return(
        <div>
            <h3>Title is: {post.title}</h3>
            <p>{post.text}</p><br></br>
            <p>{post.createdAt}</p>
        </div>
    )
}