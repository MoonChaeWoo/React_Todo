import { useCallback, useState } from "react";

const useInput = (initialValue) => {

    const {todos, setTodos} = initialValue;
    const [value, setValue] = useState('');
    
    //input 값 변경 시 이벤트
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    });

    // 폼 submit 시 아이템 추가 이벤트
    const addFormItem = useCallback((e) => {
        e.preventDefault();
        let addObject = {id : todos.slice(-1)[0].id + 1, text : value, checked: false}
        setTodos([...todos,addObject]);
        setValue('');
    }, [value]);

    return {value, onChange, addFormItem};
}

export {useInput}