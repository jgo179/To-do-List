"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { Todo } from "./types/todo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckIcon, TrashIcon } from "lucide-react";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedList = localStorage.getItem("todoList");
    if (storedList) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodoList(JSON.parse(storedList));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoaded]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Todo>();

  const HandleSubmit = (data: Todo) => {
    const description = data.description;
    const id = (todoList.at(-1)?.id ?? 0) + 1;

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
    console.log(id);

    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    );
  };

  const handleDelete = (id: number) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  const handleClear = () => {
    setTodoList([]);
  };

  return (
    <div className="">
      <div className="flex flex-center mt-15 mb-15 justify-center">
        <h1 className="text-2xl font-bold text-center">Listas de tarefas</h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="border-2 rounded p-5">
          <form
            onSubmit={handleSubmit(HandleSubmit)}
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

              <Button
                type="submit"
                disabled={errors.description ? true : false}
              >
                Adicionar
              </Button>

              <Button
                variant="destructive"
                onClick={handleClear}
                disabled={!todoList.length}
              >
                Limpar lista
              </Button>
            </Field>
          </form>
        </div>

        <div className="flex flex-col mt-2 border-2 rounded p-5 justify-center">
          <ScrollArea className="h-[60vh]">
            <ul className="flex flex-col-reverse mt-2 gap-2 ">
              {todoList.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-row items-center justify-between ml-5 mr-5 pt-5 pb-3 gap-2 border-b-2 hover:text-gray-400 "
                >
                  <span
                    onClick={() => handleClick(item.id)}
                    className={`${item.completed ? "line-through text-gray-400" : ""} flex flex-row items-center gap-2 justify-between w-full cursor-pointer`}
                  >
                    {item.description}
                    {item.completed && (
                      <CheckIcon className="text-green-600" />
                    )}{" "}
                  </span>

                  <span>
                    <TrashIcon
                      className="text-red-600"
                      onClick={() => handleDelete(item.id)}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
