export default function Button({ className, onSubmit, buttonText }) {
  return (
    <div>
      <button onClick={onSubmit} className={className}>
        {buttonText}
      </button>
    </div>
  );
}
