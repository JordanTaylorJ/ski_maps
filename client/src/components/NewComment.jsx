import React, {useState, useContext} from 'react';
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewComment = ({thisResort, handleSubmitComment}) => {

    const {user} = useContext(UserContext);
    const [newComment, setNewComment] = useState({
        user_id: user.id,
        resort_id: thisResort.id,
        comment: ""
    });

    const handleCommentChange = (e) => {
        const target = e.target;
        setNewComment({...newComment, [target.name]:target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitComment(newComment);
        setNewComment({
            user_id: user.id,
            resort_id: thisResort.id,
            comment: ""
        })
    }

    return(
        <div>
            <Box
                component="form"
                onSubmit={(e) => handleSubmit(e)}
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <TextField 
                id="outlined-multiline-flexible"
                label="Comment" 
                variant="standard" 
                multiline
                maxRows={4}
                type='text'
                name='comment'
                value={newComment.comment}
                onChange={(e) => handleCommentChange(e)} 
            />
            <Button
                type='submit' 
                value="submit"
            > Save
            </Button>
        </Box>
      </div>
    )
}

export default NewComment;