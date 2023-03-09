import React, {useState, useContext} from 'react';
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const NewBookmark = ({resort}) => {

    const {user, setUser} = useContext(UserContext);
    const [newBookmark, setNewBookmark] = useState({
        resort_id: resort.id,
        user_id: user.id,
        notes: ''
    })

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/bookmarks',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newBookmark)
        })
        .then(r => r.json())
        .then(r => handleAddBookmark(r))
    }

    const handleAddBookmark = (createdBookmark) => {
        const updatedBookmarks = [...user.bookmarks, createdBookmark]
        const updatedUser = {
            id: user.id,
            username: user.username,
            bookmarks: updatedBookmarks
        }
        setUser(updatedUser);
        setNewBookmark({
            resort_id: resort.id,
            user_id: user.id,
            notes: ''
        });
        handleClose();
    }

    const handleBookmarkChange = (e) => {
        const target = e.target
        setNewBookmark({...newBookmark, [target.name]:target.value})
    }
    
    return (
        <React.Fragment>
        <IconButton onClick={handleOpen} ><BookmarkBorderIcon /></IconButton>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
            <h2 id="child-modal-title">Bookmark</h2>
            <p id="child-modal-description">
                Optional Notes: 
            </p>
            <Box
                component="form"
                onSubmit={(e) => handleSubmit(e)}
                sx={{
                '& > :not(style)': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="outlined-multiline-flexible"
                    label="Notes" 
                    variant="standard" 
                    multiline
                    maxRows={4}
                    type='text'
                    name='notes'
                    value={newBookmark.notes}
                    onChange={(e) => handleBookmarkChange(e)} 
                />
                <Button
                    type='submit' 
                    value="submit"
                > Save
                </Button>
            </Box>
            </Box>
        </Modal>
        </React.Fragment>
    );
}

export default NewBookmark;