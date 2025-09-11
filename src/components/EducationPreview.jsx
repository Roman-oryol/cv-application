import React from 'react';

function EducationPreview({ data }) {
  return (
    <div className="cv-preview__section">
      <h3 className="typo--h3">Образование</h3>
      <p>
        <strong>Учебное заведение:</strong> <span>{data.school}</span>
      </p>
      <p>
        <strong>Направление:</strong> <span>{data.study}</span>
      </p>
      <p>
        <strong>Даты:</strong> <span>{data.eduDates}</span>
      </p>
    </div>
  );
}

export default EducationPreview;
