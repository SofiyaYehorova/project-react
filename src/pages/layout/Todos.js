import React, {useEffect, useState} from 'react';
import {ApiService} from "../../services/api.service";
import TodosComponent from "../../components/TodosComponent";
import TodosDetails from "./todosDetails/TodosDetails";
import {Outlet, Route} from "react-router-dom";

function Todos() {
    const apiService = new ApiService('todos');
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        apiService.getAll().then(value=> setTodos(value))
    },[])

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

export default Todos;