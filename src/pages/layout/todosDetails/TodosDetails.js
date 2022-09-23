import React from 'react';
import {useLocation} from "react-router-dom";

const TodosDetails = () => {
    const location = useLocation();

    let {state}=location;
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export default TodosDetails;