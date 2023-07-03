import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";




const Navbar = () => {
return <nav className={classes.nav}>
<div className={`${classes.item} ${classes.active}`}>
  <a>Messages</a>
  <div className="item">
 <NavLink to="/dialogs">Dialogs</NavLink>
</div>
<div className="item">
 <NavLink to="/content">content</NavLink>
</div>
<div className="item">
  <NavLink to="/tables">Tables</NavLink>
</div>
</div>


 </nav>
}

export default Navbar;