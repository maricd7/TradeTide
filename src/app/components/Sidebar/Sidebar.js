//component for rendering sidebar element
"use client";
import React from "react";
import Logo from "../ui/Logo/Logo";
import { Icon } from "@iconify/react";
import styles from "./Sidebar.module.css";
import { LogoutButton } from "../ui";
import { useAuthContext } from "@/app/contexts/AuthContext";

const Sidebar = () => {
  const { currentUser } = useAuthContext();

  !currentUser ? <div>Skrr</div> : <h2>dsa</h2>;
  return (
    <aside className={styles.sidebarContainer}>
      <Logo />
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarListElement}>
          <Icon
            icon="carbon:analytics"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
          Analytics
        </li>
        <li className={styles.sidebarListElement}>
          <Icon
            icon="carbon:inventory-management"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
          Inventory
        </li>
        <li className={styles.sidebarListElement}>
          <Icon
            icon="carbon:analytics"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
          Add Product
        </li>
        <li className={styles.sidebarListElement}>
          <Icon
            icon="carbon:analytics"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
          Orders
        </li>
      </ul>
      <div>{currentUser.email}</div>
      <LogoutButton />
    </aside>
  );
};

export default Sidebar;
