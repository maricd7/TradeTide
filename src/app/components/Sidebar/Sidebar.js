import React from "react";
import Logo from "../ui/Logo/Logo";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    <aside className="bg-primary fixed w-1/6 left-0 h-screen flex flex-col gap-8">
      <div className="px-4 py-2">
        <Logo />
      </div>
      <ul className="flex flex-col h-full">
        <li className="bg-secondary text-white px-8 py-4 hover:bg-gray-950 cursor-pointer px-4 py-2 flex gap-2 items-center">
          <Icon
            icon="carbon:analytics"
            width="24"
            height="24"
            style={{ color: "#fff" }}
          />
          Analytics
        </li>
        <li className="bg-gray-800 text-white px-8 py-4 hover:bg-gray-950 cursor-pointer px-4 py-2">
          Inventory
          <Icon
            icon="carbon:inventory-management"
            width="24"
            height="24"
            style={{ color: "#fff" }}
          />
        </li>
        <li className="bg-gray-800 text-white px-8 py-4 hover:bg-gray-950 cursor-pointer px-4 py-2">
          Add Product
          <Icon
            icon="carbon:analytics"
            width="24"
            height="24"
            style={{ color: "#fff" }}
          />
        </li>
        <li className="bg-gray-800 text-white px-8 py-4 hover:bg-gray-950 cursor-pointer px-4 py-2">
          Orders
          <Icon
            icon="carbon:analytics"
            width="24"
            height="24"
            style={{ color: "#fff" }}
          />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
