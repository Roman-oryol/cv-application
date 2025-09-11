import { useState } from 'react';
import InputField from './InputField';
import FormInput from './FormInput';
import FormDisplay from './FormDisplay';

const experienceFields = [
  {
    name: 'company',
    label: 'Компания',
    type: 'text',
    placeholder: 'ООО Рога и Копыта',
  },
  {
    name: 'position',
    label: 'Должность',
    type: 'text',
    placeholder: 'Frontend-разработчик',
  },
  {
    name: 'duties',
    label: 'Обязанности',
    type: 'textarea',
    placeholder: 'Разработка интерфейсов',
  },
  {
    name: 'startDate',
    label: 'Начало',
    type: 'date',
    placeholder: '',
  },
  {
    name: 'endDate',
    label: 'Конец',
    type: 'date',
    placeholder: '',
  },
];

function ExperienceForm({ onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);

  const [formData, setFormData] = useState({
    company: '',
    position: '',
    duties: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    onSubmit('experience', formData);
  };

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <form className="cv-form__section" onSubmit={handleSubmit}>
      <h2 className="typo--h2">Опыт работы</h2>
      {isEditing ? (
        <FormInput
          fields={experienceFields}
          onChange={handleChange}
          data={formData}
        />
      ) : (
        <FormDisplay
          onClick={handleClick}
          fields={experienceFields}
          data={formData}
        />
      )}
    </form>
  );
}

export default ExperienceForm;
