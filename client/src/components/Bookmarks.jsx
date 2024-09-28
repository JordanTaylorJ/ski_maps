import React, {useContext, useState} from 'react';
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Bookmarks = () => {

    const {user, setUser} = useContext(UserContext);
    const [bookmarks, setBookmarks] = useState(user.bookmarks)

    const handleDelete = (e) => {
        fetch(`/api/bookmarks/${e.target.value}`, {
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
            <Box sx={{ 
                position: 'absolute', 
                left: '50%', 
                top: '60%',
                transform: 'translate(-50%, -50%)', 
                width: 650, 
                height: 650, 
                }}
            >
            {bookmarks.map(({id, resort: {name}, notes}) => {
                return(
                <div key={id} >
                    <h2>{name}</h2>
                    {notes ? 
                    <p>Notes: {notes}</p>
                    : null}
                    <Link to={`/resorts/${name}`} rel="noreferrer">
                        View Details
                    </Link>       
                    <Button 
                        onClick={(e) => handleDelete(e)}
                        value={id}
                    >
                        Delete
                    </Button>
                </div>
                )
            })}
            </Box>
        )
    } else {
        return(
            <h1>You haven't bookmarked any resorts!</h1>
        )
    }

}

export default Bookmarks;