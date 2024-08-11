import React from "react";

const NavigationLink = ({ children, name, isOpen } = props) => {
  return (
    <a className="flex p-2 rounded cursor-pointer place-items-center gap-5 transition-all duration-300 text-gray-50 hover:bg-slate-700 hover:ease-in-out">
      {children}
      <p
        className={`text-inherit overflow-clip whitespace-nowrap tracking-wide ${isOpen ? "" : "hidden"}`}
      >
        {name}
      </p>
    </a>
  );
};

export default NavigationLink;
