//component for rendering sidebar element

import React from "react";
import Logo from "../ui/Logo/Logo";
import { Icon } from "@iconify/react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
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
    </aside>
  );
};

export default Sidebar;
