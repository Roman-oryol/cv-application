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

function EducationForm() {
  const [isEditing, setIsEditing] = useState(true);

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <form class="cv-form__section" data-section="education">
      <h2 class="typo--h2">Образование</h2>
      {isEditing ? (
        <FormInput onClick={handleClick} fields={educationFields} />
      ) : (
        <FormDisplay onClick={handleClick} fields={educationFields} />
      )}
    </form>
  );
}

export default EducationForm;
