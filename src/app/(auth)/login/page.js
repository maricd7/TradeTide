"use client";
import React from "react";
import Link from "next/link";
import Button from "@/app/components/ui/Button/Button";
import { useAuthContext } from "@/app/contexts/AuthContext";

const LoginPage = () => {
  const { handleLogin } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin("testadmin1234@mail.com", "123456");
    console.log("submit");
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-gray-100 px-8 py-8 rounded-lg flex flex-col gap-8 w-fit h-fit"
      >
        <h2 className="text-3xl font-bold text-gray-950">Login</h2>
        <div>
          <p className="text-gray-950">Email</p>
          <input className="bg-gray-700 rounded-lg px-4 py-2" type="text" />
        </div>
        <div>
          <p className="text-gray-950">Password</p>
          <input className="bg-gray-700 rounded-lg px-4 py-2" type="password" />
        </div>
        <Button text="Login" />
        <p className="text-gray-950">
          Don't have an account ?{" "}
          <Link className="text-green-500 " href="/register">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
