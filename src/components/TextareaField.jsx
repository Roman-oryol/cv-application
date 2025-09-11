function TextareaField({ field, value, onChange }) {
  return (
    <label className="cv-field">
      <span className="cv-field__label">Обязанности</span>
      <textarea
        name={field.name}
        rows="3"
        placeholder="Разработка интерфейсов"
        onChange={onChange}
        value={value}
      ></textarea>
    </label>
  );
}

export default TextareaField;
