import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InputBar from "../components/inputs/InputBar";
import React, { useEffect } from "react";
import { TodoInterface } from "../interfaces/CardInterface";
import TodoCard from "../components/cards/TodoCard";

const Home: NextPage = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);
  useEffect(() => {}, [todos]);
  const clearDone = (e: any) => {
    let data = todos.filter((item) => item.status == false);
    setTodos([...data]);
  };
  const clearAll = (e: any) => {
    setTodos([]);
  };
  return (
    <div className="bg-[#111]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-center text-[3rem] md:text-[4rem] font-bold mx-auto text-white mt-[4rem] mb-[2rem]">
          <span className="text-[#E9B98E]">Todo </span>
          List App
        </h1>
        <div className="max-w-xl w-full flex flex-col space-y-4 ">
          <div className="flex flex-col md:flex-row w-full space-x-0 space-y-4 md:space-y-0 md:space-x-4">
            <InputBar setTodos={setTodos} todos={todos} />
            <button
              className="text-white w-full md:w-[10rem] text-center bg-green-600 rounded-md md:rounded-[10px] px-2 hover:bg-green-800 transition-all duration-300"
              onClick={clearDone}
            >
              Clear Done
            </button>
            <button
              className="text-white w-full md:w-[7rem] text-center bg-red-400 rounded-md md:rounded-[10px] px-2 hover:bg-red-800 transition-all duration-300"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>
          {todos.map((value, key) => (
            <TodoCard
              key={key}
              index={key}
              todo={value}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
