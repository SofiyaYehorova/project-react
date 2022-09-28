import css from './Post.module.css'

const Post = ({post}) => {
    return (
        <div className={css.post}>
            <p>{post.id} --{post.title}</p>
        </div>
    );
};

export {Post};
