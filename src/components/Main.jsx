import { useState } from 'react';
import FormSidebar from './FormSidebar';
import Preview from './Preview';

function Main() {
  const [formsData, setFormsData] = useState({
    general: {},
    education: {},
    experience: {},
  });

  const handleFormSubmit = (formName, formData) => {
    setFormsData({
      ...formsData,
      [formName]: formData,
    });
  };

  return (
    <main className="cv-app__main">
      <FormSidebar onSubmit={handleFormSubmit} />
      <Preview />
    </main>
  );
}

export default Main;
