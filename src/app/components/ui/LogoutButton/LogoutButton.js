//component for rendering Logout button
"use client";
import React from "react";
import styles from "./LogoutButton.module.css";
import { useAuthContext } from "@/app/contexts/AuthContext";

const LogoutButton = () => {
  const { signOut } = useAuthContext();

  const handleLogout = () => {
    signOut();
  };
  return (
    <button className={styles.logoutBtn} onClick={() => handleLogout()}>
      Logout
    </button>
  );
};

export default LogoutButton;
