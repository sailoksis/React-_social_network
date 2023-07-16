import React from "react";
import classes from "./Content.module.css";
import Post from "./Posts/Post";

const Content = () => {
  const postData = [
    {id: 1, message: 'Hello', likesCount: 1},
    {id: 2, message: 'Hi bro', likesCount: 30}
   ]

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
    <Post message = {postData[0].message} likesCount = {postData[0].likesCount}/>
    <Post message = {postData[1].message} likesCount = {postData[1].likesCount}/>
  
      </div>
    
    </div>
  );
};

export default Content;
