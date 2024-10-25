import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-950 fixed w-1/6 left-0  h-screen">
      <ul className="flex flex-col h-full">
        <li className="bg-gray-800 text-white px-8 py-4">Analytics</li>
        <li className="bg-gray-800 text-white px-8 py-4">Inventory</li>
        <li className="bg-gray-800 text-white px-8 py-4">Add Product</li>
        <li className="bg-gray-800 text-white px-8 py-4">Orders</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
