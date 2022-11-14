import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCommentForm from "../components/AddCommentForm";
import SinglePostComponent from "../components/SinglePostComponent";
import PostsService from "../service/PostsService";
import { useHistory } from "react-router-dom";
import useFormatedDate from "../hooks/useFormatedDate";

export default function SinglePost() {
  const [post, setPost] = useState({
    title: "",
    text: "",
    createdAt: "",
    comments: [],
  });
  const postId = useParams();
  const [comment, setComment] = useState({
    text: "",
    createdAt: "",
    postId: 0,
  });
  const [commentEditId, setCommentEditId] = useState(0);

  const history = useHistory();
  const formatedDate = useFormatedDate(post.createdAt);

  const getSinglePost = async () => {
    let id = Number(postId.id);
    if (id) {
      const response = await PostsService.get(id);

      setPost(response);
    }
  };
  const evFun = async (funId) => {
    const res = await PostsService.editComment(funId);
    if (res.status === 200) {
      alert(JSON.stringify(res.data));
    }
  }
  const addComment = async (e) => {
    e.preventDefault();
    if (commentEditId !== 0) {
      const res = await PostsService.putComment(commentEditId, comment);
      if (res.status === 200) {
        let arr = post.comments.map((el) => {
          if (el.id === commentEditId) {
            return { ...res.data };
          }
          return el;
        });
        setPost({ ...post, comments: [...arr] });
        //history.push("/posts");
      }
    } else {
      let id = Number(postId.id);
      console.log(comment);
      const res = await PostsService.addComment(id, comment);
      if (res.status === 200) {
        history.push("/posts");
      }
    }
  };
  const removeComment = async (commentId) => {
    const res = await PostsService.removeComment(commentId);
    if (res.status === 200) {
      let arr = post.comments.filter((el) => el.id !== commentId);
      setPost({ ...post, comments: [...arr] });
    }
  };
  const editComment = async (commentId) => {
    const res = await PostsService.editComment(commentId);
    if (res.status === 200) {
      setComment(res.data);
      setCommentEditId(commentId);
    }
  };

  useEffect(() => {
    if(postId.id){ 
      getSinglePost();
    }
  }, [postId]);

  return (
    <div>
      <SinglePostComponent
        post={post}
        comments={post.comments}
        formatedDate={formatedDate}
        removeComment={removeComment}
        editComment={editComment}
        evFun = {evFun}
      />
      <AddCommentForm
        comment={comment}
        id={postId.id}
        setComment={setComment}
        add={addComment}
      />
    </div>
  );
}
