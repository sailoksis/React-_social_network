import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css'


const DialogsItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={style.dialog + " " + style.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };

export default DialogsItem;