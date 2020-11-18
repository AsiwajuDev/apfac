export default function Button({ className, onClick, buttonText, type }) {
  return (
    <div>
      <button onClick={onClick} type={type} className={className}>
        {buttonText}
      </button>
    </div>
  );
}
