import { useInput } from '../custom/useInput';
import '../scss/TodoInsert.scss'
import {MdAdd} from 'react-icons/md'

const TodoInsert = ({useTodos}) => {

    const insertData = useInput(useTodos);

    return (
        <form className='TodoInsert' onSubmit={insertData.addFormItem}>
            <input  name='insertInput'
                    value={insertData.value}
                    onChange={insertData.onChange}
                    placeholder='할 일을 입력하세요'/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
}

export default TodoInsert;