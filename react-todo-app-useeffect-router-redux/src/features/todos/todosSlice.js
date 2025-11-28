import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodos } from "../../api/todoApi";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await fetchTodos();
  return res.data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default todosSlice.reducer;
