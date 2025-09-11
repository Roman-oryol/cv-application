import GeneralPreview from './GeneralPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

import '../styles/preview.css';

function Preview({ formsData }) {
  return (
    <section className="cv-preview">
      <div className="cv-preview__card">
        <h2 className="typo--h2">Резюме</h2>
        <GeneralPreview data={formsData.general} />
        <EducationPreview data={formsData.education} />
        <ExperiencePreview data={formsData.experience} />
      </div>
    </section>
  );
}

export default Preview;
