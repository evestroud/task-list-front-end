import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from './components/NewTaskForm';
import './App.css';
import axios from 'axios';

const App = () => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/tasks').then((response) => {
      const newResponse = response.data.map((task) => {
        return { ...task, isComplete: task.is_complete };
      });
      setTaskData(newResponse);
      console.log(newResponse);
    });
  }, []);

  const onFormSubmit = (newTask) => {
    axios.post('http://127.0.0.1:5000/tasks', newTask).then((response) => {});
  };

  const updateTaskData = (updatedTask) => {
    const newTaskData = taskData.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTaskData(newTaskData);
  };

  const deleteTaskData = (deletedId) => {
    const newTaskData = taskData.filter((task) => {
      if (task.id === deletedId) {
        return false;
      } else {
        return true;
      }
    });
    setTaskData(newTaskData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={taskData}
            updateTask={updateTaskData}
            deleteTask={deleteTaskData}
          />
          <NewTaskForm />
        </div>
      </main>
    </div>
  );
};

export default App;
