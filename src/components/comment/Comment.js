import {Link} from "react-router-dom";

import css from './Comment.module.css'

const Comment = ({comment}) => {
    return (
        <div className={css.comment}>
            <p>{comment.id} -- {comment.body}</p>
            <hr/>
            <span><Link to={comment.postId.toString()}>Posts</Link></span>
        </div>
    );
};

export {Comment};

