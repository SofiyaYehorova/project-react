import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>menu
                <li><Link to={'albums'}>Albums</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
                <li><Link to={'todos'}>Todos</Link></li>
            </ul>
        </div>
    );
};

export {Header};
