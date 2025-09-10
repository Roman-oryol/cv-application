function InputField({ field }) {
  return (
    <label className="cv-field">
      <span className="cv-field__label">{field.label}</span>
      <input
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
      />
    </label>
  );
}

export default InputField;
