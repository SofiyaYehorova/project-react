import {Albums} from "../components";

import css from './Pages.module.css'
const AlbumsPage = () => {
    return (
        <div className={css.albums}>
            <Albums/>
        </div>
    )
};

export {AlbumsPage};