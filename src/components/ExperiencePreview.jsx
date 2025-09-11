function ExperiencePreview({ data }) {
  return (
    <div className="cv-preview__section">
      <h3 className="typo--h3">Опыт работы</h3>
      <p>
        <strong>Компания: </strong>
        <span>{data.company}</span>
      </p>
      <p>
        <strong>Должность: </strong>
        <span>{data.position}</span>
      </p>
      <p>
        <strong>Обязанности: </strong>
        <span>{data.duties}</span>
      </p>
      <p>
        <strong>Начало: </strong>
        <span>{data.startDate}</span>
      </p>
      <p>
        <strong>Конец: </strong>
        <span>{data.endDate}</span>
      </p>
    </div>
  );
}

export default ExperiencePreview;
