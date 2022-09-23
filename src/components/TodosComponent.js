import React from 'react';
import {Link} from "react-router-dom";

const TodosComponent = ({item}) => {
    let {id, title, completed}=item;
    return (
        <div>
            {id} - {title} - {completed} <Link to={id.toString()} state={{...item}}>MORE INFO</Link>
         </div>
    );
};

export default TodosComponent;