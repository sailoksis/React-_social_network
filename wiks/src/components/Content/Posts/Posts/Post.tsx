import React from "react";
import classes from "./Post.module.css";

const Post = (props: any) => {


  return (
    <div className={classes.item}>
      <img
        src="https://w7.pngwing.com/pngs/464/554/png-transparent-account-avatar-profile-user-avatars-icon.png"
        alt="avatar"
      />
      {props.message}

      
      <div><span>like</span> {props.likesCount}</div> 
 
    </div>
  );
};

export default Post;
