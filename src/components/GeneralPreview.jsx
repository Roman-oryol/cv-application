function GeneralPreview({ data }) {
  return (
    <div className="cv-preview__section">
      <h3 className="typo--h3">Общая информация</h3>
      <p>
        <strong>Имя: </strong>
        {data.name}
      </p>
      <p>
        <strong>Email: </strong>
        {data.email}
      </p>
      <p>
        <strong>Телефон: </strong>
        {data.phone}
      </p>
    </div>
  );
}

export default GeneralPreview;
