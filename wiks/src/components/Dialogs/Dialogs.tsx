import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + " " + styles.active}>
          <NavLink to="/dialogs/1">Mihail</NavLink>
        </div>

        <div className={styles.dialog}><NavLink to="/dialogs/2">Ana</NavLink></div>
        <div className={styles.dialog}><NavLink to="/dialogs/3">Dima</NavLink></div>
        <div className={styles.dialog}><NavLink to="/dialogs/4">Hell</NavLink></div>
        <div className={styles.dialog}><NavLink to="/dialogs/5">Andrey</NavLink></div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>How</div>
        <div className={styles.message}>You</div>
      </div>
    </div>
  );
};

export default Dialogs;
