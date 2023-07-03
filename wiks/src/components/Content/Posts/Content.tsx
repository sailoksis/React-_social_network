import React from "react";
import classes from "./Content.module.css";
import Post from "./Posts/Post";

const Content = () => {
  return (
    <div>
      <div>
       Posts
      </div>
      <div>
        <textarea name="add" id="type"></textarea>
        <button> Add post</button>
        <button> Copy</button>
      </div>
      <div>
        New posts
      </div>
      <div className={classes.posts}>
    <Post message = "Hello" likesCount = '0'/>
    <Post message = "Hi bro" likesCount = '22'/>
    <Post/>
      </div>
    
    </div>
  );
};

export default Content;
