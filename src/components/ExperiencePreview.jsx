function ExperiencePreview() {
  return (
    <div class="cv-preview__section" data-preview="experience">
      <h3 class="typo--h3">Опыт работы</h3>
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
