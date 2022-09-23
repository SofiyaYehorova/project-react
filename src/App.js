import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Todos from "./pages/layout/Todos";
import Albums from "./pages/layout/Albums";
import Comments from "./pages/layout/Comments";
import TodosDetails from "./pages/layout/todosDetails/TodosDetails";
import React from "react";

function App() {
  return (
    <div>
     <div>
       <h2>menu</h2>
       <ul>
         <li><Link to={'/'}>home</Link></li>
         <li><Link to={'/layout'}>layout</Link></li>
         <li><Link to={'/about'}>about</Link></li>

       </ul>
     </div>

      <div>
        <h2>content</h2>

        <Routes>
          <Route index element={<Home/>}/>
          <Route path={'/layout'} element={<Layout/>}>
              <Route path={'todos'} element={<Todos/>}/>
              <Route path={':id'} element={<TodosDetails/>}/>
              <Route path={'albums'} element={<Albums/>}/>
              <Route path={'comments'} element={<Comments/>}/>
          </Route>
          <Route path={'/about'} element={<About/>}/>

        </Routes>

      </div>

    </div>
  );
}

export default App;
