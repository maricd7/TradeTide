import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={styles.primaryButton}>
      {text}
    </button>
  );
};

export default Button;
