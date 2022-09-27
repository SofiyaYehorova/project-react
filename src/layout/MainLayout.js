import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <h3>CONTENT</h3>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};