import React from "react";

export default function AddPostForm({post, setPost, onSubmit, onSubmitEdit, reset}){

    return(
        <div>
            <form >
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
            <button onClick={onSubmit}>Submit</button>
            <>
            <button onClick={onSubmitEdit}>Edit</button>
            </>
            </form>
            <button onClick={() => {reset()}}>Reset</button>
        </div>
    )

}