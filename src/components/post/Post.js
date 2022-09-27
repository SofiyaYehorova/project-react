const Post = ({post}) => {
    return (
        <div>
            <p>{post.id} --{post.title}</p>
        </div>
    );
};

export {Post};
