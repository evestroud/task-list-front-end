import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, updateTask }) => {
  const toggleComplete = () => {
    console.log('here');
    const newTask = {
      id: id,
      title: title,
      isComplete: !isComplete,
    };
    updateTask(newTask);
  };

  const toggleStyle = isComplete
    ? 'tasks__item__toggle--completed'
    : 'tasks__item__toggle';

  return (
    <li className="tasks__item">
      <button className={toggleStyle} onClick={toggleComplete}>
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;
