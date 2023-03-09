import React, {useContext, useState} from 'react';
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Bookmarks = () => {

    const {user, setUser} = useContext(UserContext);
    const [bookmarks, setBookmarks] = useState(user.bookmarks)

    const handleDelete = (e) => {
        fetch(`/bookmarks/${e.target.value}`, {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {handleDeleteBookmark(e.target.value)}
        })
    }

    const handleDeleteBookmark = (deletedBookmark) => {
        const updatedBookmarks = user.bookmarks.filter((bookmark) => bookmark.id !== parseInt(deletedBookmark));
        const updatedUser = {
            id: user.id,
            username: user.username, 
            bookmarks: updatedBookmarks
        }
        setUser(updatedUser);
        setBookmarks(updatedBookmarks);
    }

    if (bookmarks.length > 0) {
        return(
            <div>
            {bookmarks.map(bookmark => {
                return(
                <div key={bookmark.id} >
                    <h2>{bookmark.resort.name}</h2>
                    <p>Notes: {bookmark.notes}</p>
                    <Link to={`/resorts/${bookmark.resort.name}`} rel="noreferrer">
                        View Details
                    </Link>       
                    <Button 
                        onClick={(e) => handleDelete(e)}
                        value={bookmark.id}
                    >
                        Delete
                    </Button>
                </div>
                )
            })}
            </div>
        )
    } else {
        return(
            <h1>You haven't bookmarked any resorts!</h1>
        )
    }

}

export default Bookmarks;