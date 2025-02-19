import {createSlice} from '@reduxjs/toolkit';
import history from '../history';
import axios from 'axios';

const initialTask = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : null;

const initialState = {
    TaskData: initialTask,
    AllTasks: {},
}
export const taskSlice = createSlice({
    name: 'Task',
    initialState,

    reducers: {
        taskAddedSuccessfully: (state, action) => {
            state.TaskData = action.payload;
        },
        taskAddFailure: (state) => {
            return state;
        },
        getAllTaskSuccess: (state, action) => {
            state.AllTasks = action.payload;
        },
        getAllTaskFailure: (state) => {
            return state;
        },
        editTaskSuccess: (state, action) => {
            state.TaskData = action.payload;
        },
        editTaskFailure: (state, action) => {
            return state;
        },
        deleteSuccess: (state, action) => {
            state.TaskData = action.payload;
        },
        deleteFail: (state) => {
            return state;
        },
    }
})

export const {
    taskAddFailure, taskAddedSuccessfully, getAllTaskFailure, getAllTaskSuccess, deleteFail, deleteSuccess, editTaskFailure, editTaskSuccess
} = taskSlice.actions;

export default taskSlice.reducer;

export const addTask = (task, id) => async (dispatch) => {
    try {
      const taskData = { task, id };
  
      const response = await axios.post('http://localhost:4000/task/add', taskData);
  
      if (response.data) {
        localStorage.setItem('task', JSON.stringify(response.data));
        dispatch(taskAddedSuccessfully(response.data));
      } else {
        dispatch(taskAddFailure());
      }
    } catch (error) {
      console.error('Error adding task:', error);
      dispatch(taskAddFailure());
    }
  };
  