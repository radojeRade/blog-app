import React from "react";

export default function AddPostForm({post, setPost, onSubmit, reset}){

    return(
        <div>
            <form onSubmit={onSubmit}>
            <label>Title:</label>
            <input 
              required
              minLength="2"
              type="text" 
              value={post.title}
              onChange={({target}) => 
                setPost({...post, title: target.value})}
            />
            <label>Text</label>
            <input 
              required
              maxLength="300"
              type="text" 
              value={post.text}
              onChange={({target}) => 
                setPost({...post, text: target.value, createdAt: new Date()})} //ubacio datum ovde
            />
            <button type="submit">Submit</button>
            </form>
            <button onClick={() => {reset()}}>Reset</button>
        </div>
    )

}