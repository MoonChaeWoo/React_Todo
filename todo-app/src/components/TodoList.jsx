import '../scss/TodoList.scss'
import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => {

    const todosMap = todos.map(todo => <TodoListItem todo={todo} key={todo.id}/>);

    return(<div className="TodoList">{todosMap}</div>);
}

export default TodoList;