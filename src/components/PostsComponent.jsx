import React from "react";
import { Link } from "react-router-dom";

export default function PostsComponent({id, title, text, }){

    return(
        <div>
            <h4>{title} and id is: {id}</h4>
            <p>{text}</p>
            <Link to = {`/view/${id}`}><button>View</button></Link>
        </div>
    )
}