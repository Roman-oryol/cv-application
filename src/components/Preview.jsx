import GeneralPreview from './GeneralPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

import '../styles/preview.css';

function Preview() {
  return (
    <section className="cv-preview">
      <div className="cv-preview__card">
        <h2 className="typo--h2">Резюме</h2>
        <GeneralPreview />
        <EducationPreview />
        <ExperiencePreview />
      </div>
    </section>
  );
}

export default Preview;
