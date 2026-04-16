"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { List } from "./lib/storage";
import type { Todo } from "./types/todo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>(List);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Todo>();

  const onSubmit = (data: Todo) => {
    const description = data.description;
    const id = todoList.length + 1;
    setTodoList([
      ...todoList,
      {
        id,
        description,
        completed: false,
      },
    ]);
    reset();
  };

  const handleClick = (id: number) => {
    const itemStatus = todoList[id - 1].completed;
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          item.completed = !itemStatus;
        }
        return item;
      }),
    );
  };

  return (
    <div className="">
      <div className="flex flex-center mt-15 mb-15 justify-center">
        <h1 className="text-2xl font-bold text-center">Listas de tarefas</h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="border-2 rounded p-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-row mt-2 mb-2 gap-2 justify-between"
          >
            <Field orientation="horizontal">
              <Input
                {...register("description", {
                  required: true,
                  minLength: 3,
                  maxLength: 100,
                })}
                placeholder="Adicione um novo item"
                aria-invalid={!!errors.description}
              />
              <Button type="submit">Adicionar</Button>
            </Field>
          </form>
        </div>

        <div className="flex flex-col mt-2 border-2 rounded p-5 justify-center">
          <ScrollArea className="h-[60vh]">
            <ul className="flex flex-col-reverse mt-2 gap-2 ">
              {todoList.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="flex flex-row items-center justify-between cursor-pointer ml-5 mr-5 pt-5 pb-3 gap-2 border-b-2 hover:text-gray-400 "
                >
                  <span
                    className={`${item.completed ? "line-through text-gray-400" : ""}`}
                  >
                    {item.description}
                  </span>
                  <span>{item.completed && "✅"}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
