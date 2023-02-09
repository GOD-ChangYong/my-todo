import React, { useState } from "react";
import "./Todo.css";
import Template from "../components/Template";
import TodoList from "../components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "../components/Todoinsert";

let nextId = 6;

const Todo = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "아침 밥 먹기",
      checked: true,
    },
    {
      id: 2,
      text: "데일리 코딩 문제 풀기",
      checked: false,
    },
    {
      id: 3,
      text: "수업 듣기",
      checked: true,
    },
    {
      id: 4,
      text: "복습 하기",
      checked: true,
    },
    {
      id: 5,
      text: "양치 하기",
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
};

export default Todo;
