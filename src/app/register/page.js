"use client";
import React, { useState } from "react";
import Button from "../components/ui/Button/Button";
import Link from "next/link";
import { registerUser } from "../actions/register/RegisterUser";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //register submit handler function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    setEmail("");
    setPassword("");
    const data = await registerUser({ email, password });
    console.log(data);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 px-8 py-8 rounded-lg flex flex-col gap-8 w-fit h-fit"
      >
        <h2 className="text-3xl font-bold text-gray-950">Register</h2>
        <div>
          <p className="text-gray-950">Email</p>
          <input
            className="bg-gray-700 rounded-lg px-4 py-2"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <p className="text-gray-950">Password</p>
          <input
            className="bg-gray-700 rounded-lg px-4 py-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button text="Register" />
        <p className="text-gray-950">
          Already have an account?{" "}
          <Link className="text-green-500" href="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
