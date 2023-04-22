import '../scss/TodoList.scss'
import TodoListItem from './TodoListItem';

const TodoList = ({useTodos}) => {

    const {todos, setTodos} = useTodos;

    const todosMap = todos.map(todo => <TodoListItem useTodos={useTodos} itemTodo={todo} key={todo.id}/>);

    return(<div className="TodoList">{todosMap}</div>);
}

export default TodoList;