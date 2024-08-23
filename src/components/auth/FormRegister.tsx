import React from "react";

const FormRegister = () => {
  return (
    <form className="mb-8 flex h-full w-full flex-col justify-center space-y-2">
      <div className="flex flex-col space-y-1">
        <label htmlFor="username" className="font-semibold">
          Username
        </label>
        <input
          name="username"
          id="username"
          placeholder="Enter your username"
          className="input-element max-w-[90%]"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          name="email"
          id="email"
          placeholder="Enter your email"
          className="input-element max-w-[90%]"
          type="email"
          required
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          name="password"
          id="password"
          placeholder="Enter your password"
          className="input-element max-w-[90%]"
          type="password"
          required
        />
      </div>
      <button
        className="max-w-fit transform self-center rounded-lg bg-black px-4 py-2 text-xl text-white shadow-sm transition-transform focus:outline-none active:scale-95"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FormRegister;
