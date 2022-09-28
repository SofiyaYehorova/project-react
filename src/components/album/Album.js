import css from './Album.module.css';

const Album = ({album}) => {
    return (
        <div className={css.wrap}>
            <div className={css.resolve}>
                <p>{album.id} - {album.title}</p>
            </div>

        </div>
    );
};

export {Album};
