import InputField from './InputField';

function FormInput({ onClick, fields }) {
  return (
    <div class="cv-form__inputs">
      {fields.map((field, index) => {
        return <InputField field={field} key={index} />;
      })}

      <div class="cv-form__actions">
        <button class="btn btn--primary" type="submit" onClick={onClick}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default FormInput;
