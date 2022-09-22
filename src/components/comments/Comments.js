import {useEffect, useState} from "react";

import {commentService} from "../../services";
import {CommentForm} from "../commentForm/CommentForm";
import {Comment} from "../comment/Comment";

const Comments=()=>{

const [comments, setComments] = useState([]);

useEffect(()=>{
    commentService.getAll().then(({data})=>setComments(data))
},[])
    return(
        <div>
            <div>
                <CommentForm setComments={setComments}/>
            </div>
            <div>
                {
                    comments.map(comment=><Comment key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    )
}
export {
    Comments
};