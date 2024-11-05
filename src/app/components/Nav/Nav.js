"use client";
import React from "react";
import Logo from "../ui/Logo/Logo";
import styles from "./Nav.module.css";
import { Button } from "../ui";
import { useAuthContext } from "@/app/contexts/AuthContext";

const Nav = () => {
  const { currentUser } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul className={styles.navbarList}>
        <li>About us</li>
        <li>Register</li>
        <Button text="Login" />
      </ul>
    </nav>
  );
};

export default Nav;
