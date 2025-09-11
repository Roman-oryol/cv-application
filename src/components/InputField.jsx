function InputField({ field, value, onChange }) {
  return (
    <label className="cv-field">
      <span className="cv-field__label">{field.label}</span>
      <input
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default InputField;
