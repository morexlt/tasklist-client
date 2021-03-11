import axios from 'axios';

const taskApi = axios.create({ baseURL: process.env.SERVER_URL });

const getTasks = (amountOfTasks) => {
  return taskApi.get('/tasks', {
    params: {
      limit: amountOfTasks,
    },
  });
};

const updateTask = (id, data) => {
  return taskApi.put(`/tasks/${id}`, data);
};

export default {
  getTasks,
  updateTask,
};
