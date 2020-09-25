const InputField = ({ type, className, placeholder, onChange, name, id }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      name={name}
      id={id}
    />
  );
};

export default InputField;
