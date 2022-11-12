import React from "react";

export default function PostsComponent({id, title, text, }){

    return(
        <div>
            <h4>{title} and id is: {id}</h4>
            <p>{text}</p>
        </div>
    )
}