import React from 'react';

function EducationPreview() {
  return (
    <div className="cv-preview__section" data-preview="education">
      <h3 className="typo--h3">Образование</h3>
      <p>
        <strong>Учебное заведение:</strong>
        <span data-preview="school"></span>
      </p>
      <p>
        <strong>Направление:</strong> <span data-preview="study"></span>
      </p>
      <p>
        <strong>Даты:</strong> <span data-preview="eduDates"></span>
      </p>
    </div>
  );
}

export default EducationPreview;
