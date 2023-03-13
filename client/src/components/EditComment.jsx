import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditComment = ({editComment, handleEditFormChange, handleSubmitEdit, handleCancelEditClick}) => {

    return(
        <Box
            key={editComment.id}
            component="form"
            onSubmit={(e) => handleSubmitEdit(e)}
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                label="Comment" 
                variant="standard" 
                type='text'
                name='comment'
                value={editComment.comment}
                onChange={(e) => handleEditFormChange(e)} 
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
}

export default EditComment; 