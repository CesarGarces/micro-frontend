import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'completar el proyecto', completed: false },
  { id: 2, name: 'Implementar autenticación', completed: false },
  { id: 3, name: 'Crear lista de tareas', completed: true },
];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;