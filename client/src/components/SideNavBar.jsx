import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const SideNavBar = () => {
  return (
    <aside className="flex flex-col justify-center items-center w-[5rem] bg-slate-700 text-gray-50 p-8 py-[60px] sticky top-0 h-screen">
      <nav className="flex flex-col justify-between items-center gap-10 p-1">
        <a href="">
          <GoHome className="size-8" />
        </a>
        <a>
          <IoIosSearch className="size-8" />
        </a>
        <a>
          <MdOutlineAnalytics className="size-8" />
        </a>
        <a>
          <IoSettingsOutline className="size-8" />
        </a>
      </nav>
    </aside>
  );
};

export default SideNavBar;
