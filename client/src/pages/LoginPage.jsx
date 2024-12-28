import { FaGoogle } from 'react-icons/fa';
import { useLogin } from '../hooks/useLogin';

export const LoginPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    totalError,
    isLoading,
    handleUserLogin,
  } = useLogin();
  return (
    <form
      className="flex w-1/2 flex-col items-center gap-6 text-white"
      onSubmit={handleUserLogin}
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <p className="text-muted">Access your inventory now!</p>
      </div>
      <div className="flex w-3/4 flex-col items-start gap-2">
        <label className="">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 placeholder:font-light active:border-white"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>
      <div className="flex w-3/4 flex-col items-start gap-2">
        <div className="flex w-full justify-between">
          <label>Password</label>
          <a className="underline-offset-4 hover:underline">
            Forgot your Password?
          </a>
        </div>
        <input
          type="password"
          id="password"
          value={password}
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 placeholder:font-light"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}
      </div>
      {totalError && <p className="text-sm text-red-500">{totalError}</p>}

      <button className="w-3/4 rounded-md bg-white px-3 py-2 text-black">
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      <div className="flex w-3/4 flex-row items-center justify-between text-gray-400">
        <hr className="flex-1 border" />
        <p className="mx-3 text-center">Or continue with</p>
        <hr className="flex-1 border" />
      </div>
      <button className="flex w-3/4 items-center justify-center gap-5 rounded-md bg-white px-3 py-2 text-black">
        {/* add an onclick that renavigates to google oauth */}
        <FaGoogle />
        Login With Google
      </button>
    </form>
  );
};
