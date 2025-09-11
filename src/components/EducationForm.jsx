import { useState } from 'react';
import FormInput from './FormInput';
import FormDisplay from './FormDisplay';

const educationFields = [
  {
    name: 'school',
    type: 'text',
    placeholder: 'ЗНУ',
    label: 'Учебное заведение',
  },
  {
    name: 'study',
    type: 'text',
    placeholder: 'Компьютерные науки',
    label: 'Направление',
  },
  {
    name: 'eduDates',
    type: 'text',
    placeholder: '2015 - 2019',
    label: 'Даты обучения',
  },
];

function EducationForm({ onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const initFormData = educationFields.reduce(
    (data, field) => ({ ...data, [field.name]: '' }),
    {}
  );
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setIsEditing(!isEditing);
    e.preventDefault();
    onSubmit('education', formData);
  };

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <form
      className="cv-form__section"
      data-section="education"
      onSubmit={handleSubmit}
    >
      <h2 className="typo--h2">Образование</h2>
      {isEditing ? (
        <FormInput
          fields={educationFields}
          onChange={handleChange}
          data={formData}
        />
      ) : (
        <FormDisplay
          onClick={handleClick}
          fields={educationFields}
          data={formData}
        />
      )}
    </form>
  );
}

export default EducationForm;
