const Album = ({album}) => {
    return (
        <div>
                <p>{album.id} - {album.title}</p>
        </div>
    );
};

export {Album};