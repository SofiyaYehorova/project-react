const Comment =({comment})=>{

    return(
        <div>
            <div>
                <h3>{comment.id} {comment.body}</h3>
            </div>

        </div>
    )
}
export {
    Comment
};