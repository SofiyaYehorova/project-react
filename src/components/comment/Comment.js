import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <p>{comment.id} -- {comment.body}</p>
            <hr/>
            <span><Link to={comment.postId.toString()}>Posts</Link></span>
        </div>
    );
};

export {Comment};

