const useUpdate = (itemTodo, useTodos) => {
    const {todos, setTodos} = useTodos;

    const changeItem = () => {
        let item = todos.map(item => (item.id === itemTodo.id ? {...item, checked : !item.checked} : item));
        setTodos(item);
    }
    return {changeItem};
}

export {useUpdate};