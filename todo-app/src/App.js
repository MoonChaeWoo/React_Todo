 import { useState } from 'react';
import './App.css';
 import TodoInsert from './components/TodoInsert';
 import TodoList from './components/TodoList';
 import TodoTemplate from './components/TodoTemplate';

function App() {

  const initialTodos = [
    {
      id : 1,
      text : '리액트 기초 알아보기',
      checked : false
    },
    {
      id : 2,
      text : '컴포넌트 스타일',
      checked : true
    },
    {
      id : 3,
      text : '일정 관리 앱 생성',
      checked : false
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return <TodoTemplate title="일정 관리">
            <TodoInsert useTodos={{todos, setTodos}}/>
            <TodoList useTodos={{todos, setTodos}}/>
        </TodoTemplate>;
}

export default App;
