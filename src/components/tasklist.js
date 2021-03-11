import React, { useState, useEffect } from 'react';
import Task from './task';
import TaskService from '../services/task';

/**
 * TaskList
 * Get amountOfTask quantity tasks from the server and show them.
 * @param {number} amountOfTasks - amount of tasks to retrive
 *
 */
const TaskList = ({ amountOfTasks }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(amountOfTasks);
  }, [amountOfTasks]);

  const getTasks = async (amountOfTasks) => {
    const result = await TaskService.getTasks(amountOfTasks);
    setTasks(result.data);
  };

  const updateTask = async (id, data) => {
    try {
      await TaskService.updateTask(id, data);
      getTasks(amountOfTasks);
    } catch (error) {
      console.error('Cant update task');
    }
  };
  return (
    <React.Fragment>
      {tasks.map((task) => (
        <Task key={task.uuid} task={task} updateTask={updateTask} />
      ))}
    </React.Fragment>
  );
};

export default TaskList;
