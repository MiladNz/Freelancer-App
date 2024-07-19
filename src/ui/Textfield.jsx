function Textfield({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-1 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}

export default Textfield;
