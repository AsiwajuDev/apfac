const InputField = ({ type, className, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default InputField;
