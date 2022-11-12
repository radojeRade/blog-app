import React from "react";
import PostsComponent from '../components/PostsComponent';
import PostsService from "../service/PostsService";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";


export default function PostsPages(){
    const [posts, setPosts] = useState();

    const getAllPosts = async () => {
        const posts = await PostsService.getAll('/posts');
        setPosts(posts);
    };

    const remove = async(postId) => {
        const res = await PostsService.delete(postId);
         if (res === 200) {
            const arr = posts.filter(el => el.id !== postId);
            setPosts(arr);
          }
    };

    useEffect(() => {
        
        getAllPosts();
        
    }, []);

    return(
        <div>
            <h2>Posts:</h2>
            <ul>
                <li>
                    {posts && posts.map((post) =>
          
                        <PostsComponent key={post.id}
                                        id = {post.id}
                                        text={post.text}
                                        title={post.title}
                                        remove={remove} />
                        )}
                </li>
            </ul>
        </div>
    )
}