//component for rendering Logout button
"use client";
import React from "react";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const handleLogout = () => {
    console.log("Logged out!");
  };
  return (
    <button className={styles.logoutBtn} onClick={() => handleLogout()}>
      Logout
    </button>
  );
};

export default LogoutButton;
