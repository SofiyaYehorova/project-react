import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {AlbumsPage, CommentsPage, TodosPage} from "./pages";
import {Posts} from "./components";

function App() {
  return (
    <div>
   <Routes>
     <Route path={'/'} element={<MainLayout/>}/>
     <Route path={'albums'} element={<AlbumsPage/>}/>
     <Route path={'comments'} element={<CommentsPage/>}>
       <Route path={'postId'} element={<Posts/>}/>
     </Route>

     <Route path={'todos'} element={<TodosPage/>}/>
   </Routes>
    </div>
  )
}

export default App;
