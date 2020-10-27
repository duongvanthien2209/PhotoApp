const { createSlice } = require('@reduxjs/toolkit');

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: ['Đi học', 'Đi làm'],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo } = actions;
export default reducer;
