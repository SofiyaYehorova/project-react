import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {AlbumsPage, CommentsPage, TodosPage} from "./pages";
import {Posts} from "./components";
import {HomePage} from "./pages/HomePage";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Posts/>}/>
                </Route>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}

export default App;


