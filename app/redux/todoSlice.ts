import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "todo1",
      completed: false,
    },
    {
      id: 2,
      title: "todo2",
      completed: false,
    },
    {
      id: 3,
      title: "todo3",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",

  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo: Todo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
