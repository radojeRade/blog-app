import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SinglePostComponent from '../components/SinglePostComponent';
import PostsService from "../service/PostsService";



export default function SinglePost(){
    const [post, setPost] = useState({title:'', text:'', createdAt:''});
    const postId = useParams();

    const getSinglePost = async () => {
        let id = Number(postId.id);
        if (id) {
            const response = await PostsService.get(id);
            setPost(response);
        }
    }

    useEffect(() => {
        if (postId.id) {
            getSinglePost();
        }
    }, [postId]);

    return(

        <div>
            <SinglePostComponent post = {post}/>
        </div>

    )
}