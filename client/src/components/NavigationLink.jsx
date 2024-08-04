import React from "react";

const NavigationLink = ({ children, name } = props) => {
  return (
    <a className="flex p-2 rounded cursor-pointer stroke-[1px] place-items-center gap-5 transition-all duration-300 text-white hover:bg-slate-700 hover:ease-in-out">
      {children}
      <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
        {name}
      </p>
    </a>
  );
};

export default NavigationLink;
