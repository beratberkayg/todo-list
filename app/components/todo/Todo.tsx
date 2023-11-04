"use client";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { AppDispatch } from "@/app/redux/store";
import { addTodo, removeTodo, completedTodo } from "@/app/redux/todoSlice";

import { useState } from "react";

const Todo: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);

  const [value, setValue] = useState<string>("");
  const dispatch: AppDispatch = useAppDispatch();

  const addTodoFunc = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  const removeTodoFunc = (id: number) => {
    dispatch(removeTodo(id));
  };
  const completedTodoFunc = (id: number) => {
    dispatch(completedTodo(id));
  };

  console.log(todos);

  return (
    <div className=" bg-slate-500 min-h-[400px] w-2/3 mt-10 mb-10 rounded-lg shadow-xl flex flex-col items-center gap-5 pt-7 pb-7">
      <h2 className="text-2xl">Yapılacaklar Listem</h2>
      <div className="w-[90%] mx-auto flex bg-slate-200 rounded-md">
        <input
          type="text"
          className="w-full  bg-transparent pl-3 outline-none"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button
          onClick={addTodoFunc}
          className=" bg-slate-200 rounded-md border border-black px-5 py-1 text-xl hover:bg-white hover:text-black"
        >
          Ekle
        </button>
      </div>
      <div className="w-full">
        {todos.map((todo) => (
          <div
            className={` flex justify-between items-center w-[90%] mx-auto  bg-white my-3 rounded-lg py-2 px-3 ${
              todo.completed ? " bg-green-600 line-through  " : ""
            } `}
          >
            <li
              className="list-none text-2xl truncate w-full"
              style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
              key={todo.id}
            >
              {todo.title}
            </li>
            <div className="flex gap-3 ">
              <div className={` ${todo.completed ? "text-red-600" : ""}`}>
                <AiOutlineCheck
                  onClick={() => completedTodoFunc(todo.id)}
                  cursor={"pointer"}
                  size={25}
                />
              </div>
              <div>
                <BsFillTrashFill
                  onClick={() => removeTodoFunc(todo.id)}
                  cursor={"pointer"}
                  size={25}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
