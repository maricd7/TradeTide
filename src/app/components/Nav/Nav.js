import React from "react";
import Logo from "../ui/Logo/Logo";
import styles from "./Nav.module.css";
import { Button } from "../ui";
const Nav = () => {
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
