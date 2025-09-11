import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import GeneralForm from './GeneralForm ';

function FormSidebar({ onSubmit }) {
  return (
    <aside className="cv-form">
      <GeneralForm onSubmit={onSubmit} />
      <EducationForm onSubmit={onSubmit} />
      <ExperienceForm onSubmit={onSubmit} />
    </aside>
  );
}

export default FormSidebar;
