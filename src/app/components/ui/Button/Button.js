import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.primaryButton}>
      {text}
    </button>
  );
};

export default Button;
