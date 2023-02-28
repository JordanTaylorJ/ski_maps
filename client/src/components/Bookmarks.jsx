import React, {useContext, useState} from 'react';
import { UserContext } from "../context/user";

const Bookmarks = () => {

    const {user, setUser} = useContext(UserContext);
    const [bookmarks, setBookmarks] = useState(user.bookmarks)


    return(
        <>
        {bookmarks.map(bookmark => 
            <p>{bookmark.notes} here</p>
        )} 
        </>
    )
}

export default Bookmarks;