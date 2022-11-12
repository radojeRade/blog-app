import React from "react";
import PostsComponent from '../components/PostsComponent';
import PostsService from "../service/PostsService";
import { useState } from "react";
import { useEffect } from "react";



export default function PostsPages(){
    const [posts, setPosts] = useState();
    const [count, setCount] = useState();

    const getAllPosts = async () => {
        const posts = await PostsService.getAll('/posts');
        setPosts(posts);
        const arr = await Promise.all(posts.map(async(el) => {  //Promise.all vraca niz promisa koji se razresavaju
            try{
                let num = await PostsService.getCount(el.id);
                el.count = num.count;
                return el;
            }catch(err) {
                throw err;
            }
        }))
        setPosts(arr);
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
                                        count={post.count}
                                        remove={remove} />
                        )}
                </li>
            </ul>
        </div>
    )
}