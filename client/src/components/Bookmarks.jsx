import React, {useContext, useState} from 'react';
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Bookmarks = () => {

    const {user, setUser} = useContext(UserContext);
    const [bookmarks, setBookmarks] = useState(user.bookmarks)
    const [editBookmarkId, setEditBookmarkId] = useState(null)
    const [editBookmark, setEditBookmark] = useState({
        resort_id: '',
        user_id: user.id,
        notes: ''
    })

    const handleCancelEditClick = () => {
        setEditBookmarkId(null);
    }

    return(
        <div>
        {bookmarks.map(bookmark => {
            if (bookmark.id === editBookmarkId){
                return(
                <Box
                    key={bookmark.id}
                    component="form"
                    //onSubmit={(e) => handleSubmitEdit(e)}
                    sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                <h2>{bookmark.resort.name}</h2>
                <TextField 
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={4}
                    label="Notes" 
                    variant="standard" 
                    type='text'
                    name='notes'
                    value={editBookmark.notes}
                    //onChange={(e) => handleEditFormChange(e)} 
                />
                <Button 
                    type='submit'
                > Save 
                </Button>
                <Button
                    onClick={handleCancelEditClick}
                > Cancel 
                </Button>
            </Box>
                )
            } else {
                return(
                <div key={bookmark.id} >
                    <h2>{bookmark.resort.name}</h2>
                    <p>Notes: {bookmark.notes} here</p>
                    <Button onClick={() => setEditBookmarkId(bookmark.id)}
                    >
                        Edit
                    </Button>
                </div>
                )
            }
        } 
        )} 
        </div>
    )
}

export default Bookmarks;