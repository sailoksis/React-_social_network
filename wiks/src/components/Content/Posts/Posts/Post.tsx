import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.item}>
      <img
        src="https://w7.pngwing.com/pngs/464/554/png-transparent-account-avatar-profile-user-avatars-icon.png"
        alt="avatar"
      />
      Post 1
      
      <div><span>like</span></div>
 
    </div>
  );
};

export default Post;
