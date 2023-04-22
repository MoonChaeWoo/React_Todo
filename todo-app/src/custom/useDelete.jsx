const useDelete = (itemTodo, useTodos) => {

    const {todos, setTodos} = useTodos;

    const removeItem = () => {
        let item = todos.filter(item => item.id !== itemTodo.id);
        setTodos(item);
    }

    return {todos, setTodos, removeItem}
}

export {useDelete};