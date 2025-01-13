import React from 'react';
import { UseSignup } from '../hooks/useSignup';

export const SignupPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    organization,
    setOrganization,
    errors,
    totalError,
    isLoading,
    handleUserSignup,
  } = UseSignup();
  return (
    <form
      className="flex w-1/2 flex-col items-center gap-6 text-white"
      onSubmit={handleUserSignup}
    >
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">Welcome to Quantify!</h1>
        <p className="">
          {/**make sure to adjust opacity and text colors based on importance */}
          Register to use the ultimate inventory management system
        </p>
      </div>
      <div className="flex w-full flex-row items-start gap-2">
        <div className="flex w-full flex-col items-start gap-2">
          <label className="">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 placeholder:font-light focus:border-white focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <label className="">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 placeholder:font-light focus:border-white focus:outline-none"
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-2">
        <label className="">Organization</label>
        <input
          type="text"
          maxLength={40}
          id="organization"
          value={organization}
          placeholder="Quantify IMS"
          onChange={(e) => setOrganization(e.target.value)}
          className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 placeholder:font-light focus:border-white focus:outline-none"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-2">
        <label className="">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 placeholder:font-light focus:border-white focus:outline-none"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>
      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex w-full justify-between">
          <label>Password</label>
        </div>
        <input
          type="password"
          id="password"
          value={password}
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 placeholder:font-light focus:border-white focus:outline-none"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}
      </div>
      {totalError && <p className="text-sm text-red-500">{totalError}</p>}

      <button className="w-full rounded-md bg-white px-3 py-2 text-black">
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {/* <div className="flex w-3/4 flex-row items-center justify-between text-gray-400">
        <hr className="flex-1 border" />
        <p className="mx-3 text-center">Or continue with</p>
        <hr className="flex-1 border" />
      </div>
      <button className="flex w-3/4 items-center justify-center gap-5 rounded-md bg-white px-3 py-2 text-black">
        {/* add an onclick that renavigates to google oauth
        Login With Google
       </button> 
       */}
    </form>
  );
};
