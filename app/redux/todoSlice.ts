import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: Todos[] = [];

export const todoSlice = createSlice({
  name: "todos",

  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completedTodo: (state, action: PayloadAction<number>) => {
      const todoUpdate = state.find((todo) => todo.id === action.payload);
      if (todoUpdate) {
        todoUpdate.completed = !todoUpdate.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, completedTodo } = todoSlice.actions;

export default todoSlice.reducer;
