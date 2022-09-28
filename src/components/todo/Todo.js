import css from './Todo.module.css';

const Todo = ({todo}) => {
    return (
        <div className={css.wrap}>
            <p>{todo.id} - {todo.title}</p>
        </div>
    );
};

export {Todo};
