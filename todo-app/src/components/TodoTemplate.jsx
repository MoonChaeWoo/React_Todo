import '../scss/TodoTemplate.scss'

const TodoTemplate = ({title, children}) => {
    return(
        <div className='TodoTemplate'>
            <div className='app-title'>{title}</div>
            <div className='content'>{children}</div>
        </div>
    );
}

export default TodoTemplate;