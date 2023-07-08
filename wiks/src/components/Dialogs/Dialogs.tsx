import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogsItem = (props: any) => {
  let path = "/dialogs/" + props.id;
return <div className={styles.dialog + " " + styles.active}>
<NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props: any) => {
  return  <div className={styles.dialog}>{props.message}</div>
        }

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogsItem name='Mihail' id = '1'/>
        <DialogsItem name='Anya' id = '2'/>
        <DialogsItem name='Dima' id = '3'/>
        <DialogsItem name='Oleg' id = '4'/>
        <DialogsItem name='Sega' id = '5'/>
        <DialogsItem name='Sim' id = '6'/>
      </div>

      
      <div className={styles.messages}>
        <Message message = 'Hi'></Message>
        <Message message = 'Buy'></Message>
        <Message message = 'Hello '></Message>
      </div>
    </div>
  );
};

export default Dialogs;
