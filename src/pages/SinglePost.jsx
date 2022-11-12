import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCommentForm from "../components/AddCommentForm";
import SinglePostComponent from '../components/SinglePostComponent';
import PostsService from "../service/PostsService";
import {useHistory} from "react-router-dom";



export default function SinglePost(){
    const [post, setPost] = useState({title:'', text:'', createdAt:'', comments: []});
    const postId = useParams();
    const [comment, setComment]= useState({text:'', createdAt:'', postId: 0});
    const history = useHistory();

    const getSinglePost = async () => {
        let id = Number(postId.id);
        if (id) {
            const response = await PostsService.get(id);
            setPost(response);
        }
    }
    const addComment = async(e) => {
        e.preventDefault();
        let id = Number(postId.id);
        console.log(comment);
        const res = await PostsService.addComment(id, comment);
        if(res.status === 200){
            history.push('/posts');
        }  
    }

    useEffect(() => {
        if (postId.id) {
            getSinglePost();
        }
    }, [postId]);

    return(

        <div>
            <SinglePostComponent post = {post}
                                 comments = {post.comments} />
            <AddCommentForm comment = {comment}
                            id = {postId.id}
                            setComment = {setComment}
                            add = {addComment} />
        </div>

    )
}