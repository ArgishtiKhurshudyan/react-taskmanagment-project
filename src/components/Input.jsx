import React from "react";

function Input({ value, onChange, name, placeholder, type }) {
  return (
    <div className="divinp">
      <label htmlFor={name}>{name}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
export default Input;
