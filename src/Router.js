import React from "react";
import { Switch, Route } from "react-router-dom";


import PostsPages from "./pages/PostsPages";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";

export default function Router(){

    return ( 
    <Switch>
        <Route exact path="/posts">
            <PostsPages />
        </Route>
        <Route exact path="/view/:id">
            <SinglePost />
        </Route>
        <Route exact path="/add">
            <AddPost />
        </Route>
        
    </Switch>
    )
}