import { useState } from 'react';
import FormDisplay from './FormDisplay';
import FormInput from './FormInput';
import '../styles/form.css';

const generalFields = [
  { name: 'name', label: 'Имя', type: 'text', placeholder: 'Иван Иванов' },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'ivan@example.com',
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
    placeholder: '+38(050) 333 33 33',
  },
];

function GeneralForm({ onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const initFormData = generalFields.reduce(
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
    onSubmit('general', formData);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <form
      className="cv-form__section"
      data-section="general"
      onSubmit={handleSubmit}
    >
      <h2 className="typo--h2">Общая информация</h2>
      {isEditing ? (
        <FormInput
          fields={generalFields}
          onChange={handleChange}
          data={formData}
        />
      ) : (
        <FormDisplay
          onClick={handleEditClick}
          fields={generalFields}
          data={formData}
        />
      )}
    </form>
  );
}

export default GeneralForm;
