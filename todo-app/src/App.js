 import './App.css';
 import TodoInsert from './components/TodoInsert';
 import TodoList from './components/TodoList';
 import TodoTemplate from './components/TodoTemplate';

function App() {
  return <TodoTemplate title="일정 관리">
            <TodoInsert/>
            <TodoList/>
        </TodoTemplate>;
}

export default App;
