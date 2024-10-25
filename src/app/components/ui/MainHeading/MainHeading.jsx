//component for rendering  h1 main heading of the app

import React from "react";
import styles from "./MainHeading.module.css";

const MainHeading = ({ text }) => {
  return <h1 className={styles.mainHeading}>{text}</h1>;
};

export default MainHeading;
