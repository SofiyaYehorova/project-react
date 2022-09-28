import {useEffect, useState} from "react";
import {Comment} from "../comment/Comment";
import {commentService} from "../../services";

import css from './Comments.module.css'

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentService.getAll().then(({data})=>setComments(data))
    },[])
    return (
        <div>
            <div className={css.comments}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>

    );
}

export {Comments};