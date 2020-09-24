import React from "react";

const InputTextArea = ({
  name,
  placeholder,
  value,
  id,
  className,
  onChange,
  onClick,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default InputTextArea;
