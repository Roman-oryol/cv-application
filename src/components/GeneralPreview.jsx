function GeneralPreview() {
  return (
    <div className="cv-preview__section" data-preview="general">
      <h3 className="typo--h3">Общая информация</h3>
      <p>
        <strong>Имя:</strong> <span data-preview="name"></span>
      </p>
      <p>
        <strong>Email:</strong> <span data-preview="email"></span>
      </p>
      <p>
        <strong>Телефон:</strong> <span data-preview="phone"></span>
      </p>
    </div>
  );
}

export default GeneralPreview;
