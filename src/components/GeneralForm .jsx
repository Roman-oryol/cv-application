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

function GeneralForm() {
  const [isEditing, setIsEditing] = useState(true);

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <form class="cv-form__section" data-section="general">
      <h2 class="typo--h2">Общая информация</h2>
      {isEditing ? (
        <FormInput onClick={handleClick} fields={generalFields} />
      ) : (
        <FormDisplay onClick={handleClick} fields={generalFields} />
      )}
    </form>
  );
}

export default GeneralForm;
