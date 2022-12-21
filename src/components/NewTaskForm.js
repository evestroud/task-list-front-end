import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ( {onFormSubmit}) => {
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

  const submitTaskData = (e) => {
    e.preventDefault();

    onFormSubmit(formData);

    setFormData({title: '', description: ''});

  };

  return (
    <div className='container'>
      <form onSubmit={submitTaskData}>
        <label htmlFor="title">Title: </label>
        <input
          name="title"
          onChange={setTitle}
          type="text"
          value={formData.title}
        />
        <label htmlFor="description">Description: </label>
        <input
          name="description"
          onChange={setDescription}
          type="text"
          value={formData.description}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

NewTaskForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;
