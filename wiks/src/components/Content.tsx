import React from "react";
import classes from './Content.module.css';

const Content = () => {
    return <div className='content'>
    <div>
    <img src="https://sportishka.com/uploads/posts/2022-04/1651298115_32-sportishka-com-p-milaya-mashina-mashini-krasivo-foto-38.jpg" alt="auto" />
    </div>
  <div className={classes.item}>
    <div>Text 1</div>
  </div>
  <div className={classes.item}>
    <div>Text 2</div>
  </div>
  <div className={classes.item}>
    <div>Text 3</div>
  </div>
  <div className={classes.item}>
    <div>Text 4</div>
  </div>
   </div>
}

export default Content;