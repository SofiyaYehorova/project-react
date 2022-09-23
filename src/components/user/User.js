

const User = ({user, getUserId}) => {
    return (
        <div>
            <h2>{user.id} -- {user.name}</h2>
            <button onClick={()=>getUserId(user.id)}>SHOW MORE</button>
        </div>
    );
};

export {User};