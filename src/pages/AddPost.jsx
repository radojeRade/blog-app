import React, { useState } from "react";
import AddPostForm from "../components/AddPostForm";
import { useHistory, useParams } from "react-router-dom";
import PostsService from "../service/PostsService";
import { useEffect } from "react";



export default function AddPost(){
    const [post, setPost] = useState({title:'', text:'', createdAt:''});
    const param = useParams();
    const history = useHistory();

    const getPost =  async () => {
        let id = Number(param.id);
        const res = await PostsService.get(id)
        setPost({...res});
        
    };

    useEffect(() => { 
        if(Object.keys(param).length > 0){ 
            getPost();
        }  
    }, []);

    const edit = async (e) => {
        e.preventDefault(); //mora da bi radio history
        let id = Number(param.id);
        const response = await PostsService.edit(id, post);
        if(response.status === 200){
            history.push('/posts');
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
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
                         onSubmitEdit = {edit}
                         reset = {reset} />
        </div>

    )
}