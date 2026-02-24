function Action({ text, onClick, disabled }) {
  return (
    <button className="action" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Action;
