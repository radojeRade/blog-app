import React from "react";
import { Switch, Route } from "react-router-dom";


import PostsPages from "./pages/PostsPages";

export default function Router(){

    return ( 
    <Switch>
        <Route exact path="/posts">
            <PostsPages />
        </Route>
        
    </Switch>
    )
}