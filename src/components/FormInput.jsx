import InputField from './InputField';
import TextareaField from './TextareaField';

function FormInput({ fields, onChange, data }) {
  return (
    <div className="cv-form__inputs">
      {fields.map((field, index) => {
        return field.type !== 'textarea' ? (
          <InputField
            field={field}
            key={index}
            value={data[field.name]}
            onChange={onChange}
          />
        ) : (
          <TextareaField
            field={field}
            key={index}
            value={data[field.name]}
            onChange={onChange}
          />
        );
      })}

      <div className="cv-form__actions">
        <button className="btn btn--primary" type="submit">
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default FormInput;
