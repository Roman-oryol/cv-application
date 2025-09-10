import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import GeneralForm from './GeneralForm ';

function FormSidebar() {
  return (
    <aside className="cv-form">
      <GeneralForm />
      <EducationForm />
      <ExperienceForm />
    </aside>
  );
}

export default FormSidebar;
