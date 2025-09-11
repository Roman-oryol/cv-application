function FormDisplay({ onClick, fields, data }) {
  return (
    <div className="cv-form__display">
      {fields.map((field, index) => {
        return (
          <p key={index}>
            <strong>{field.label}: </strong>
            {data[field.name]}
          </p>
        );
      })}

      <div className="cv-form__actions">
        <button className="btn btn-edit" type="button" onClick={onClick}>
          Редактировать
        </button>
      </div>
    </div>
  );
}

export default FormDisplay;
