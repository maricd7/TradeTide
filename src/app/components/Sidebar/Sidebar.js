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
      <div>
        <Logo />
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListElement}>
            <Icon
              icon="carbon:analytics"
              width="24"
              height="24"
              style={{ color: "#fff" }}
            />
            Analytics
          </li>
          <li className={styles.sidebarListElement}>
            <Icon
              icon="carbon:inventory-management"
              width="24"
              height="24"
              style={{ color: "#fff" }}
            />
            Inventory
          </li>
          <li className={styles.sidebarListElement}>
            <Icon
              icon="carbon:analytics"
              width="24"
              height="24"
              style={{ color: "#fff" }}
            />
            Add Product
          </li>
          <li className={styles.sidebarListElement}>
            <Icon
              icon="carbon:analytics"
              width="24"
              height="24"
              style={{ color: "#fff" }}
            />
            Orders
          </li>
        </ul>
      </div>
      <LogoutButton />
    </aside>
  );
};

export default Sidebar;
