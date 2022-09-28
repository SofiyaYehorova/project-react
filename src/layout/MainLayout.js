import {Outlet} from "react-router-dom";

import {Header} from "../components";

import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div className={css.main}>
            <Header/>
            <h3>CONTENT</h3>
            <hr/>
            <div className={css.outlet}>
                <Outlet/>
            </div>

        </div>
    );
};

export {MainLayout};

