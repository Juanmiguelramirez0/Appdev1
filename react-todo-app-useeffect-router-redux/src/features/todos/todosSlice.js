import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodosAPI, addTodoAPI, updateTodoAPI, deleteTodoAPI } from "../../api/todoApi.js";

// Thunks
export const getTodos = createAsyncThunk("todos/getTodos", async () => await getTodosAPI());
export const addTodo = createAsyncThunk("todos/addTodo", async (title) => {
  const newTodo = { userId: 1, title, completed: false };
  return await addTodoAPI(newTodo);
});
export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => await updateTodoAPI(todo));
export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => await deleteTodoAPI(id));

// Initial state
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const todosSlice = createSlice({
  name: "todos",
  initialState: { items: savedTodos, loading: false },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTodos.pending, state => state.loading = true)
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = Array.isArray(action.payload) ? action.payload : [];
        localStorage.setItem("todos", JSON.stringify(state.items));
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        localStorage.setItem("todos", JSON.stringify(state.items));
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.items.findIndex(item => item.id === updated.id);
        if (index !== -1) state.items[index] = updated;
        localStorage.setItem("todos", JSON.stringify(state.items));
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        localStorage.setItem("todos", JSON.stringify(state.items));
      });
  }
});

export default todosSlice.reducer;