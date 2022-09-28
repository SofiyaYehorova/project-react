import {Todos} from "../components";

import css from './Pages.module.css'
const TodosPage = () => {
    return (
        <div className={css.todos}>
            <Todos/>
        </div>
    )
}

export {TodosPage};
