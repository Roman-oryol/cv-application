function FormDisplay({ onClick, fields }) {
  return (
    <div class="cv-form__display">
      {fields.map((field) => {
        return (
          <p class="cv-display__line">
            <strong>{field.label}:</strong>{' '}
            <span data-display={field.name}></span>
          </p>
        );
      })}

      <div class="cv-form__actions">
        <button class="btn" type="button" data-action="edit" onClick={onClick}>
          Редактировать
        </button>
      </div>
    </div>
  );
}

export default FormDisplay;
