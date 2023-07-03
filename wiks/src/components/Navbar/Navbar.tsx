import React from "react";
import classes from './Navbar.module.css';





const Navbar = () => {
return <nav className={classes.nav}>
<div className={`${classes.item} ${classes.active}`}>
  <a>Messages</a>
</div>
<div className="item">
  <a href="/dialogs">Dialogs</a>
</div>
<div className="item">
  <a href="/content">content</a>
</div>
<div className="item">
  <a>Settings</a>
</div>

 </nav>
}

export default Navbar;