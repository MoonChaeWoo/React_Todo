import '../scss/TodoListItem.scss';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({itemTodo, useTodos}) => {

    const {todos, setTodos} = useTodos;

    const removeItem = () => {
        let item = todos.filter(item => item.id !== itemTodo.id);
        setTodos(item);
    }

    return(
        <div className='TodoListItem'>
            <div className={cn('checkbox', { checked : itemTodo.checked })}>
                {itemTodo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{itemTodo.text}</div>
            </div>
            <div className='remove' onClick={() => {removeItem()}}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;