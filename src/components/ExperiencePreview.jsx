function ExperiencePreview() {
  return (
    <div className="cv-preview__section" data-preview="experience">
      <h3 className="typo--h3">Опыт работы</h3>
      <p>
        <strong>Компания:</strong> <span data-preview="company"></span>
      </p>
      <p>
        <strong>Должность:</strong>
        <span data-preview="position"></span>
      </p>
      <p>
        <strong>Обязанности:</strong>
        <span data-preview="duties"></span>
      </p>
      <p>
        <strong>Период:</strong>
        <span data-preview="startDate"></span> —
        <span data-preview="endDate"></span>
      </p>
    </div>
  );
}

export default ExperiencePreview;
