import React, {useContext, useState} from 'react';
import { useLocation } from "react-router-dom";
import NewComment from './NewComment';
import { UserContext } from "../context/user";
import Button from '@mui/material/Button';

const ResortDetail = ({resorts, setResorts}) => {

    let location = useLocation();
    const thisResort = resorts.find(resort => resort.id === parseInt(location.state.id));
    const {user} = useContext(UserContext);
    const [comments, setComments] = useState(thisResort.comments)

    const handleSubmitComment = (newComment) => {
        fetch('/comments', {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then(r => handleAddComment(r))
    }

    const handleAddComment = (comment) => {
        const updatedComments = [...thisResort.comments, comment]
        const updatedResorts = resorts.map((resort) => {
            if (resort.id == comment.resort_id){
                return{
                    ...resort, comments:updatedComments
                }
            } else return resort
        })
        setResorts(updatedResorts)
        setComments(updatedComments)
    }

    console.log(thisResort, 'resort whats here?')
    return(
        <>
            <h1>{thisResort.name}</h1>
            {comments.map(c => {
                return(
                    < div key={c.id}>
                    <p>{c.comment}</p>
                    <Button>
                        Edit 
                    </Button>
                    </div>
                )
            })}
            {user ? 
            <NewComment 
                thisResort={thisResort} 
                handleSubmitComment={handleSubmitComment} 
            />
            : 
            <p>Login to comment!</p>
            }
        </>
    )
}

export default ResortDetail;