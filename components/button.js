export default function Button({ className, onSubmit, buttonText, type }) {
  return (
    <div>
      <button onClick={onSubmit} type={type} className={className}>
        {buttonText}
      </button>
    </div>
  );
}
