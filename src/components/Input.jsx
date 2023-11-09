import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <input
      className="w-full h-16 rounded-[10px] border border-[#C8354B] bg-inherit text-black pl-2"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
