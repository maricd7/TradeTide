import React from "react";

const SidebarItem = () => {
  return (
    <li className="bg-gray-800 text-white px-8 py-4 hover:bg-gray-950 cursor-pointer px-4 py-2 flex gap-2 items-center">
      <Icon
        icon="carbon:analytics"
        width="24"
        height="24"
        style={{ color: "#fff" }}
      />
      Analytics
    </li>
  );
};

export default SidebarItem;
