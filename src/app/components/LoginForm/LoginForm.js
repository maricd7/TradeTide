//component for rendering and handling login

import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "../ui";
import { useAuthContext } from "@/app/contexts/AuthContext";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { handleLogin } = useAuthContext();
  const handleSubmit = (e) => {
    handleLogin(emailRef.current.value, passwordRef.current.value);
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-gray-100 px-8 py-8 rounded-lg flex flex-col gap-8 w-fit h-fit"
    >
      <h2 className="text-3xl font-bold text-gray-950">Login</h2>
      <div>
        <p className="text-gray-950">Email</p>
        <input
          ref={emailRef}
          className="bg-gray-700 rounded-lg px-4 py-2"
          type="text"
        />
      </div>
      <div>
        <p className="text-gray-950">Password</p>
        <input
          ref={passwordRef}
          className="bg-gray-700 rounded-lg px-4 py-2"
          type="password"
        />
      </div>
      <Button text="Login" />
      <p className="text-gray-950">
        Don't have an account ?{" "}
        <Link className="text-green-500 " href="/register">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
