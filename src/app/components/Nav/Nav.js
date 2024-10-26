import React from "react";
import Logo from "../ui/Logo/Logo";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul className={styles.navbarList}>
        <li>About us</li>
        <li>Register</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
