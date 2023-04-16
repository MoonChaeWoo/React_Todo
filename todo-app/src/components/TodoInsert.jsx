import { useCallback, useState } from 'react';
import '../scss/TodoInsert.scss'
import {MdAdd} from 'react-icons/md'

const TodoInsert = ({useTodos}) => {
    const {todos, setTodos} = useTodos;
    const [value, setValue] = useState('');
    // input 값 변경 시 이벤트
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    
    // 폼 submit 시 아이템 추가 이벤트
    const addFormItem = useCallback(e => {
        e.preventDefault();
        let addObject = {id : todos.slice(-1)[0].id + 1, text : value, checked: false}
        setTodos([...todos, addObject]);
    }, [value]);

    return (
        <form className='TodoInsert' onSubmit={addFormItem}>
            <input  name='insertInput'
                    value={value}
                    onChange={onChange}
                    placeholder='할 일을 입력하세요'/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
}

export default TodoInsert;