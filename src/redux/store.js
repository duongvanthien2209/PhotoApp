import todoReducer from '../components/TodoApp/todoSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
