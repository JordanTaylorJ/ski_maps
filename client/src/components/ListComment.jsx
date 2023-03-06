import React, {useContext} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserContext } from "../context/user";

const ListComment = ({comment, handleDelete, handleEditCommentId}) => {
    
    const {user} = useContext(UserContext);

    return(
        <>
        <ListItem key={comment.id} alignItems="flex-start">
            <ListItemText 
                //primary={comment.user}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    > {comment.comment}
                    </Typography>
                    </React.Fragment>
                }
            />
            {(comment.user_id === user.id) ? 
            (<Button onClick={(e) => handleEditCommentId(e, comment)}>
                Edit
            </Button>) 
            : <></>}
            {(comment.user_id === user.id) ? 
            (<Button 
            value={comment.id} onClick={(e) => handleDelete(e)}
            >
                Delete
            </Button>) 
            : <></>}
        </ListItem>
        </>
    )
}

export default ListComment;