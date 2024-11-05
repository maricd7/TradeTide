//component for rendering and handling login

import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "../ui";
import { useAuthContext } from "@/app/contexts/AuthContext";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { handleLogin } = useAuthContext();
  const handleSubmit = (e) => {
    handleLogin(emailRef.current.value, passwordRef.current.value);
    e.preventDefault();
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputContainer}>
          <p className={styles.label}>Email</p>
          <input ref={emailRef} className={styles.input} type="text" />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.label}>Password</p>
          <input ref={passwordRef} className={styles.input} type="password" />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Login" />
        </div>
        <p>
          Don't have an account?{" "}
          <Link href="/register" className={styles.linkText}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
