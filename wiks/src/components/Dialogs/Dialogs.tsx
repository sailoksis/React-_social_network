import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + ' ' + styles.active}>Andrey</div>
        <div className={styles.dialog}>Andrey</div>
        <div className={styles.dialog}>Andrey</div>
        <div className={styles.dialog}>Andrey</div>
        <div className={styles.dialog}>Andrey</div>
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
