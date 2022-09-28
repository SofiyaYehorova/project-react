import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>
            <div className={css.button}>
                <button onClick={()=>navigate(-1)}>Prev</button>
                <button onClick={()=>navigate(1)}>Next</button>
            </div>
        </div>
    );
};
export {Header};
