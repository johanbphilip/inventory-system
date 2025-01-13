import { BsBoxFill, BsBookmarkHeart } from 'react-icons/bs';
import {
  IoBarChartOutline,
  IoNotificationsOutline,
  IoPersonCircleOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { RiHomeLine, RiHistoryFill } from 'react-icons/ri';
import { FiBox } from 'react-icons/fi';
import { TbCategory } from 'react-icons/tb';

import { NavLink } from 'react-router';

export const SideBar = () => {
  return (
    <div className="font-secondary text-quantDark fixed bottom-0 flex h-screen w-48 flex-col items-start border-r bg-white shadow-xl">
      <div className="font-primary flex w-full items-center justify-start gap-2 px-4 py-5 text-3xl font-semibold">
        <BsBoxFill className={`fill-quantHighlight group flex size-10`} />
        Quantify
      </div>
      <hr className="w-full stroke-white" />

      <nav className="flex h-full w-full flex-col justify-between px-4 py-5">
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="text-quantDark text-normal font-semibold opacity-50">
            General
          </h2>
          <NavLink
            to={'/analytics'}
            className="hover:bg-quantHighlight flex w-full items-center gap-4 rounded-md px-3 py-2 text-base font-normal transition-all duration-200 ease-in-out hover:text-white"
          >
            <IoBarChartOutline className={'size-6'} />
            <p className="flex">Analytics</p>
          </NavLink>
          <NavLink
            to={'/notifications'}
            className="hover:bg-quantHighlight flex w-full items-center gap-4 rounded-md px-3 py-2 text-base font-normal transition-all duration-200 ease-in-out hover:text-white"
          >
            <IoNotificationsOutline className="size-6" />
            <p className="flex">Notifications</p>
          </NavLink>
          <h2 className="text-quantDark text-normal font-semibold opacity-50">
            Main Menu
          </h2>
          <NavLink
            to={'/dashboard'}
            className="hover:bg-quantHighlight flex w-full items-center gap-4 rounded-md px-3 py-2 text-base font-normal transition-all duration-200 ease-in-out hover:text-white"
          >
            <RiHomeLine className="size-6" />
            <p className="flex">Dashboard</p>
          </NavLink>
          <NavLink
            to={'/all-products'}
            className="hover:bg-quantHighlight flex w-full items-center gap-4 rounded-md px-3 py-2 text-base font-normal transition-all duration-200 ease-in-out hover:text-white"
          >
            <FiBox className="size-6" />
            <p className="flex">All Products</p>
          </NavLink>
          <h2 className="text-quantDark text-normal font-semibold opacity-50">
            My Inventory
          </h2>
          <NavLink
            to={'/transaction-history'}
            className="hover:bg-quantHighlight flex w-full items-center gap-4 rounded-md px-3 py-2 text-base font-normal transition-all duration-200 ease-in-out hover:text-white"
          >
            <RiHistoryFill className="size-6" />
            <p className="flex">History</p>
          </NavLink>
          <NavLink
            to={'/favourites'}
            className="hover:bg-quantHighlight flex w-full items-center gap-4 rounded-md px-3 py-2 text-base font-normal transition-all duration-200 ease-in-out hover:text-white"
          >
            <BsBookmarkHeart className="size-6" />
            <p className="flex">Favourites</p>
          </NavLink>
          <NavLink
            to={'/categories'}
            className="hover:bg-quantHighlight flex w-full items-center gap-4 rounded-md px-3 py-2 text-base font-normal transition-all duration-200 ease-in-out hover:text-white"
          >
            <TbCategory className="size-6" />
            <p className="flex">Categories</p>
          </NavLink>
        </div>
        <div className="hover:bg-quantHighlight flex items-center justify-center gap-2 rounded-md border p-2 transition-all duration-200 ease-in-out hover:text-white">
          <IoPersonCircleOutline className="size-8" />
          <div>
            <p className="text-sm">Johan Philip</p>
            <p className="text-xs opacity-50">johan@johan.com</p>
          </div>
          {/* <IoSettingsOutline className="size-6 hover:cursor-pointer" /> */}
        </div>
      </nav>
    </div>
  );
};
