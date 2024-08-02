import React from "react";
import { MdOutlineInventory2 } from "react-icons/md";

const TopNavBar = () => {
  return (
    <header className="flex flex-row justify-evenly items-center h-9 bg-slate-700 text-gray-50 p-8 fixed top-0 w-screen z-10">
      <MdOutlineInventory2 className="size-8" />
      <h3 className="font-bold text-xl">Inventory System</h3>
    </header>
  );
};

export default TopNavBar;
