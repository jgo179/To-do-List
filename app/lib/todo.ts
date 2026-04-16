import { List } from "../lib/storage";

export function getTodo() {
  return List;
}

export function addTodo(description: string) {
  const listLength = List.length;
  const newItem = {
    id: listLength + 1,
    description,
    completed: false,
  };
  List.push(newItem);
}
