import styles from './../Dialogs.module.css'


const Message = (props: any) => {
    return <div className={styles.dialog}>{props.message}</div>;
  };

  export default Message; 