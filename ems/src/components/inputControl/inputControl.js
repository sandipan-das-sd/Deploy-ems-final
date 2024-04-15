import React from 'react';
import styles from "./inputControl.module.css";

export default function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
{/* //Using the spread operator to pass props dynamically */}
    </div>
  );
}
