import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { MdOutlineAnalytics, MdOutlineInventory2 } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import NavigationLink from "./NavigationLink";

const navigationContainerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const arrowVariants = {
  close: {
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationControls = useAnimationControls();
  const arrowControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      navigationControls.start("open");
      arrowControls.start("open");
    } else {
      navigationControls.start("close");
      arrowControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      variants={navigationContainerVariants}
      animate={navigationControls}
      initial="close"
      className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-screen shadow shadow-neutral-600"
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        {isOpen ? (
          <div className="bg-gradient-to-br from-orange-500 to-amber-700 rounded-full size-8"></div>
        ) : (
          <div></div>
        )}
        <button
          className="p-1 rounded-full flex"
          onClick={() => handleOpenClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-8 stroke-white"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={arrowVariants}
              animate={arrowControls}
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-center gap-[5rem] py-[2rem]">
        <NavigationLink name="Inventory System">
          <MdOutlineInventory2 className="stroke-inherit stroke-[0.75] min-w-8 h-8" />
        </NavigationLink>
        <NavigationLink name="Dashboard">
          <GoHome className="stroke-inherit stroke-[0.75] min-w-8 h-8" />
        </NavigationLink>
        <NavigationLink name="Search Items">
          <IoIosSearch className="stroke-inherit stroke-[0.75] min-w-8 h-8" />
        </NavigationLink>
        <NavigationLink name="Analytics">
          <MdOutlineAnalytics className="stroke-inherit stroke-[0.75] min-w-8 h-8" />
        </NavigationLink>
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
