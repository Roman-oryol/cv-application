import InputField from './InputField';

function ExperienceForm() {
  return (
    <form className="cv-form__section" data-section="experience">
      <h2 className="typo--h2">Опыт работы</h2>
      <InputField
        field={{
          name: 'company',
          label: 'Компания',
          type: 'text',
          placeholder: 'ООО Рога и Копыта',
        }}
      />
      <InputField
        field={{
          name: 'position',
          label: 'Должность',
          type: 'text',
          placeholder: 'Frontend-разработчик',
        }}
      />
      <label className="cv-field">
        <span className="cv-field__label">Обязанности</span>
        <textarea
          name="duties"
          rows="3"
          placeholder="Разработка интерфейсов"
        ></textarea>
      </label>
      <label className="cv-field">
        <span className="cv-field__label">Даты</span>
        <p className="cv-field__dates">
          <input name="startDate" type="date" />
          <input name="endDate" type="date" />
        </p>
      </label>
    </form>
  );
}

export default ExperienceForm;
