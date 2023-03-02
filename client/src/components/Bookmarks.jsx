import React, {useContext, useState} from 'react';
import { UserContext } from "../context/user";
import Button from '@mui/material/Button';

const Bookmarks = () => {

    const {user, setUser} = useContext(UserContext);
    const [bookmarks, setBookmarks] = useState(user.bookmarks)

    return(
        <>
        {bookmarks.map(bookmark => 
            <div>
                <h2>{bookmark.resort.name}</h2>
                <p>Notes: {bookmark.notes} here</p>
                <Button>
                    Edit
                </Button>
            </div>
        )} 
        </>
    )
}

export default Bookmarks;