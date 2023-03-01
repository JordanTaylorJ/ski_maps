import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const NewBookmark = () => {
    
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
    
    return (
        <React.Fragment>
        <Button onClick={handleOpen}>Bookmark</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
            <h2 id="child-modal-title">Bookmark with notes</h2>
            <p id="child-modal-description">
                Notes: 
            </p>
            <Box
                component="form"
                //onSubmit={(e) => handleSubmit(e)}
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
                    //value={newComment.comment}
                    //onChange={(e) => handleCommentChange(e)} 
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