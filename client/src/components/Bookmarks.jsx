import React, {useContext, useState} from 'react';
import { UserContext } from "../context/user";

const Bookmarks = () => {

    const {user, setUser} = useContext(UserContext);
    const [bookmarks, setBookmarks] = useState(user.bookmarks)

    console.log(bookmarks, 'bookmarks')
    return(
        <>
        {bookmarks.map(bookmark => 
            <div>
                <h2>{bookmark.resort.name}</h2>
                <p>Notes: {bookmark.notes} here</p>
            </div>
        )} 
        </>
    )
}

export default Bookmarks;