import '../scss/TodoListItem.scss';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import { useDelete } from '../custom/useDelete';

const TodoListItem = ({itemTodo, useTodos}) => {

    const deletItem = useDelete({itemTodo, useTodos});

    return(
        <div className='TodoListItem'>
            <div className={cn('checkbox', { checked : itemTodo.checked })}>
                {itemTodo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{itemTodo.text}</div>
            </div>
            <div className='remove' onClick={() => {deletItem.removeItem()}}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;