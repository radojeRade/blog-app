import React from "react";
import PostsComponent from '../components/PostsComponent';
import PostsService from "../service/PostsService";
import { useState } from "react";
import { useEffect } from "react";


export default function PostsPages(){
    const [posts, setPosts] = useState();

    const getAllPosts = async () => {
        const posts = await PostsService.getAll('/posts');
        setPosts(posts);
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
                                        title={post.title} />
                        )}
                </li>
            </ul>
        </div>
    )
}