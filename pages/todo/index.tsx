import { TodoItemType } from "@/types/todo";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const addTod = () => {
    let t = {
      title: "new todo" + Math.floor(Math.random() * 20),
      isCompleted: false,
      id: Math.random().toString(),
    };
    setTodos([...todos, t]);
  };
  const deleteTodo = (id: string) => {
    let newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-6">
        <Button onClick={addTod}>Add Todo</Button>
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <div key={todo.id} className="grid grid-cols-3 gap-4 items-center">
              <span className="col-span-2">{todo.title}</span>
              <Button className="col-span-1" size="sm" onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
