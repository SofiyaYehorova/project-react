import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {ApiService} from "../../services";
import {TodosComponent} from "../../components/TodosComponent";

function Todos() {
    const apiService = new ApiService('todos');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        apiService.getAll().then(value => setTodos(value))
    }, [])

    return (
        <div>
            <div>
                <h3>DETAILS</h3>
                <Outlet/>
            </div>
            <hr/>
            <div>
                {
                    todos.map(value => <TodosComponent key={value.id} item={value}/>)
                }
            </div>
        </div>

    );
}

export {Todos};