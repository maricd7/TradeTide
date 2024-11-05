//rendering reusable logo component
import React from "react";
import styles from "./Logo.module.css";
import Image from "next/image";

const Logo = () => {
  return (
    <Image src="/static/logo.png" alt="trade tide " width={96} height={25} />
  );
};

export default Logo;
