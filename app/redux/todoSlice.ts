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
    removeTodo: (state , action : PayloadAction<number>){
      return state.toSorted.id
    }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
