import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>

            <div>
                <h2>sun menu</h2>
                <ol>
                    <li><Link to={'todos'}>todos page</Link></li>
                    <li><Link to={'albums'}>all albums</Link></li>
                    <li><Link to={'comments'}>comments</Link></li>
                </ol>
            </div>

            <Outlet/>
        </div>
    );
};

export default Layout;