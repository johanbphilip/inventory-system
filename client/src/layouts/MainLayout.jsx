import { Outlet } from 'react-router';
import { SideBar } from '../components/SideBar';
import { ItemSideBar } from '../components/ItemSideBar';

export const MainLayout = () => {
  return (
    <main className="flex w-screen">
      <SideBar />
      <div className="h-full w-full pl-48">
        <Outlet />
      </div>
    </main>
  );
};
