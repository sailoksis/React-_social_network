import React from "react";
import classes from "./Content.module.css";
import Post from "./Posts/Post";

const Content = () => {
  return (
    <div className="content">
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
    <Post/>
    <Post/>
    <Post/>
      </div>
    
    </div>
  );
};

export default Content;
