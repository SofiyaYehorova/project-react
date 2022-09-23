import './App.css';
import {Users, Posts} from "./components";
import {postService} from "./services";
import {useState} from "react";


function App() {
    const [posts, setPosts] = useState([]);
    const getUserId=(userId)=>{
        postService.getPosts(userId).then(({data})=>setPosts(data))
    }

    return (
    <div>
        <Users getUserId={getUserId}/>
        <Posts posts={posts}/>
    </div>
  );
}

export {App};

