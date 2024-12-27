import { Outlet } from 'react-router';
import { Logo } from '../components/Logo';

export const AuthLayout = () => {
  return (
    <main className="flex h-screen w-screen rounded-xl">
      <div className="w-1/3 bg-slate-600 p-10">
        <Logo color={'text-white'} />
      </div>
      <div className="flex w-2/3 flex-col items-center justify-center bg-black p-10">
        <Outlet />
      </div>
    </main>
  );
};
