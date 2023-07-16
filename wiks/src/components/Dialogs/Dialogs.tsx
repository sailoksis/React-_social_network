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
const dialogsData = [
  {id: 1, name: 'Mihail'},
  {id: 2, name: 'Anya'},
  {id: 3, name: 'Dima'},
  {id: 4, name: 'Oleg'},
  {id: 5, name: 'Sega'},
  {id: 6, name: 'Sim'},
 ]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogsItem name={dialogsData [0].name} id = {dialogsData [0].id}/>
        <DialogsItem name={dialogsData [1].name} id = {dialogsData [1].id}/>
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
