import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-lg flex py-4 px-16 font-bold bg-green-500 w-full items-center justify-center hover:bg-green-600">
      {text}
    </button>
  );
};

export default Button;
