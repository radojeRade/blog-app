import React, { useState } from "react";
import AddPostForm from "../components/AddPostForm";
import { useHistory } from "react-router-dom";
import PostsService from "../service/PostsService";



export default function AddPost(){
    const [post, setPost] = useState({title:'', text:'', createdAt:''});
    const history = useHistory();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(post);
        const res = await PostsService.add(post);
        if(res === 200){
            history.push('/posts');
        }  
    };

    const reset = () => {
        setPost({title:"", text:"", createdAt: ""});
    }


    return(

        <div>
            <AddPostForm post = {post}
                         setPost = {setPost}
                         onSubmit = {handleOnSubmit}
                         reset = {reset} />
        </div>

    )
}