import React from "react";
import Logo from "../ui/Logo/Logo";

const Nav = () => {
  return (
    <nav className="flex justify-between my-4 mx-16 sticky">
      <Logo />
      <ul className="flex gap-8">
        <li>About us</li>
        <li>Register</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
