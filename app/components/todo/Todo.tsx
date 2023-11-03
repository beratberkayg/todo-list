"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import { AppDispatch } from "@/app/redux/store";
import { addTodo } from "@/app/redux/todoSlice";
import { title } from "process";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const Todo: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch: AppDispatch = useAppDispatch();

  const { todos } = useAppSelector((state) => state.modal);

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (value.trim() !== "") {
      dispatch(addTodo(
        title : value
      ));
      setValue("");
    }
  };
  return (
    <div className=" bg-red-400 min-h-[400px] w-2/3 mt-10 rounded-lg shadow-xl flex flex-col items-center gap-5 pt-7">
      <h2 className="text-2xl">Yapılacaklar Listem</h2>
      <div className="w-[90%] mx-auto flex bg-amber-400 rounded-md">
        <input
          type="text"
          className="w-full  bg-transparent pl-3 outline-none"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button className=" bg-lime-500 rounded-md border border-black px-5 py-1 text-xl hover:bg-teal-300 ">
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Todo;
