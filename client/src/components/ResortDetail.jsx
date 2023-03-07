import React, {useContext, useState} from 'react';
import { useParams } from "react-router-dom";
import { UserContext } from "../context/user";
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditComment from './EditComment';
import ListComment from './ListComment';
import NewComment from './NewComment';
import NewBookmark from './NewBookmark';

const ResortDetail = ({resorts, setResorts}) => {

    //let location = useLocation();
    //const thisResort = resorts.find(resort => resort.id === parseInt(location.state.id));

    const params = useParams();
    const thisResort = resorts.find(resort => resort.name === params.name);
    
    const {user} = useContext(UserContext);
    const [comments, setComments] = useState(thisResort.comments)
    const [editCommentId, setEditCommentId] = useState(null);
    const [editComment, setEditComment] = useState({
        comment: "",
        user_id: "",
        resort_id: thisResort.id
    }) 

    console.log('this resort from detail', thisResort)
    console.log('comments', comments)

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

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        fetch(`/comments/${editCommentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editComment)
        })
        .then(r => r.json())
        .then((r) => handleEditUpdateComments(r))
    }

    const handleEditUpdateComments = (updatedComment) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === editCommentId) {
                return updatedComment
            } else return comment 
        })
        const updatedResorts = resorts.map((resort => {
            if (resort.id === updatedComment.resort_id) {
                return({
                    ...resort,
                    comments: updatedComments
                }) 
            } else return resort 
        }))
        setComments(updatedComments);
        setResorts(updatedResorts);
        setEditCommentId(null);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`/comments/${e.target.value}`, {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {handleDeleteComment(e.target.value)}
        })
    }

    const handleDeleteComment = (deletedCommentId) => {
        const updatedComments = comments.filter((comment) => comment.id !== parseInt(deletedCommentId));
        const updatedResorts = resorts.map((resort) => {
            if (resort.id === thisResort.id){
                return{...resort, comments:updatedComments} 
            } else return resort
        })
        setComments(updatedComments);
        setResorts(updatedResorts);
    }

    //prepopulate form data for editted comment
    const handleEditCommentId = (e, comment) => {
        e.preventDefault();
        setEditCommentId(comment.id)
        const formValues = {
            comment: comment.comment,
            resort_id: comment.resort_id,
            user_id: comment.user_id
        }
        setEditComment(formValues)
    }

    const handleEditFormChange = (e) => {
        const target = e.target;
        setEditComment({...editComment, [target.name]:target.value});
    }

    const handleCancelEditClick = () => {
        setEditCommentId(null);
    }
    console.log(thisResort, 'resort from detail page')
    return(
        <div class='center'>
            <h1>{thisResort.name}</h1>
            <Card sx={{ maxWidth: 1000 }} >
            <CardMedia
                sx={{ height: 540 }}
                //style={{height: 0, paddingTop: '56.25%'}}
                conmponent="img"
                height="500"
                image={thisResort.map}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <ul> Top elevation: {thisResort.elevation}</ul>
                    <ul>Lifts: {thisResort.lift_count}</ul>
                    <ul>Runs: {thisResort.run_count}</ul>
                    <ul>Terrain Park: {thisResort.terrain_park.toString()}</ul>
                    <ul>Night Skiing: {thisResort.night_skiing.toString()}</ul>
                    <a href={thisResort.website} target="_blank">
                        {thisResort.website}
                    </a> 
                </Typography>
               
                {user ? 
                <NewBookmark resort={thisResort}/>
                : null }
            </CardContent>
            </Card>
            
            <List sx={{ width: '100%', maxWidth: 1000, bgcolor: '#c9eff2' }}>
            <h2>Comments:</h2>
            {comments.map(comment => {
                return(
                    <>
                    {editCommentId === comment.id ? 
                    <EditComment 
                        editComment={editComment}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelEditClick={handleCancelEditClick}
                        handleSubmitEdit={handleSubmitEdit}
                    />
                    :
                    <ListComment 
                        comment={comment}
                        user={user}
                        handleDelete={handleDelete}
                        handleEditCommentId={handleEditCommentId}
                    />
                    }
                    </>
                )
            })}
            </List>
            {user ? 
            <NewComment 
                thisResort={thisResort} 
                handleSubmitComment={handleSubmitComment} 
            /> : <h2>Login to comment!</h2>}
        </div>
    )
}

export default ResortDetail;