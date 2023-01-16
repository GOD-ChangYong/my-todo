import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from "./componets/Template";
import TodoInsert from './componets/Todoinsert';
import TodoList from "./componets/TodoList";




const App = () => {
  const [insertToggle, setInsertToggle] =useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "아침 운동 가기",
      checked: true
    },
    {
      id: 2,
      text: "데일리 코딩 문제 풀기",
      checked: false
    },
    {
      id: 3,
      text: "수업 듣기",
      checked: true
    },
    {
      id: 4,
      text: "오늘한 내용 복습하기",
      checked: true
    }
  ]);

 const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  };

  return (
    <Template todoLength = {todos.length}>
      <TodoList todos={todos} />
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle}/>}
    </Template>
  )
}

export default App