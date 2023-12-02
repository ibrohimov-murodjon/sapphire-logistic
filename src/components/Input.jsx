import React from "react";

const Input = ({ placeholder, type, required, name }) => {
  return (
    <input
      className="w-full h-16 rounded-[10px] border border-[#C8354B] bg-inherit text-black pl-2"
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};

export default Input;
