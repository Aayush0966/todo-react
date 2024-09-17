import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: localStorage.getItem('taskList')? JSON.parse(localStorage.getItem('taskList') ) :
  []
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        taskName: action.payload,
        completed: false,
        id: nanoid()
      };
      state.tasks.push(task);
      localStorage.setItem('taskList', JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('taskList', JSON.stringify(state.tasks));

    },
    toggleComp: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      localStorage.setItem('taskList', JSON.stringify(state.tasks));

    }
  },
});

export const { addTask, removeTask, toggleComp } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
