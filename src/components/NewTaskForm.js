import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const setTitle = (event) => {
    setFormData({
      title: event.target.value,
      description: formData.description,
    });
  };

  const setDescription = (event) => {
    setFormData({
      description: event.target.value,
      title: formData.title,
    });
  };

  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input
        id="title"
        onChange={setTitle}
        type="text"
        value={formData.title}
      />
      <label htmlFor="description">Description: </label>
      <input
        id="description"
        onChange={setDescription}
        type="text"
        value={formData.description}
      />
      <input type="submit" />
    </form>
  );
};

export default NewTaskForm;
