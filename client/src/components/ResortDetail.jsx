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
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const ResortDetail = ({resorts, setResorts}) => {

    const params = useParams();
    const thisResort = resorts.find(resort => resort.name === params.name);
    const {name, website, elevation, terrain_park, night_skiing, lift_count, run_count, map} = resorts.find(resort => resort.name === params.name);
    
    const {user} = useContext(UserContext);
    const [comments, setComments] = useState(thisResort.comments)
    const [editCommentId, setEditCommentId] = useState(null);
    const [editComment, setEditComment] = useState({
        comment: "",
        user_id: "",
        resort_id: thisResort.id
    }) 

    const handleSubmitComment = (newComment) => {
        fetch('/api/comments', {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(r => {
            if (r.ok){
                r.json().then(r => handleAddComment(r))
            } else {
                r.json().then(r => alert(r.errors))
            }
        })
    }

    const handleAddComment = (comment) => {
        const updatedComments = [...thisResort.comments, comment]
        const updatedResorts = resorts.map((resort) => {
            if (resort.id === comment.resort_id){
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
        fetch(`/api/comments/${editCommentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editComment)
        })
        .then(r => {
            if (r.ok){
                r.json().then(r => handleEditUpdateComments(r))
            } else {
                r.json().then(r => alert(r.errors))
            }
        })
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
        fetch(`/api/comments/${e.target.value}`, {
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
    
    return(
        <div className='center'>
        <Box sx={{m:4}}>
            <h1>{name}</h1>
            <Card sx={{ maxWidth: 1000 }} >
            <CardMedia
                sx={{ height: 540 }}
                conmponent="img"
                height="500"
                image={map}
            />
            <CardContent>
                <Typography component='div' variant="body2" color="text.secondary">
                    <Box>Vertical Elevation: {elevation}ft</Box>
                    <Box>Lifts: {lift_count}</Box>
                    <Box>Runs: {run_count}</Box>
                    {terrain_park === true && 
                    <Box>Terrain Park</Box>
                    }
                    {night_skiing === true && 
                    <Box>Night Skiing</Box>
                    }
                </Typography>
                <a href={website} target="_blank">
                    {website}
                </a> 
                {user ? 
                <NewBookmark resort={thisResort}/>
                : null }
            </CardContent>
            </Card>
            {comments.length > 0 ?
            <List sx={{ width: '100%', maxWidth: 1000, bgcolor: '#c9eff2' }}>
            <h2>Comments:</h2>
            {comments.map(comment => {
                return(
                    <div key={comment.id}>
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
                    </div>
                )
            })}
            </List>
            : 
            <p>Be the first to leave a comment!</p> 
            }
            {user ? 
            <NewComment 
                thisResort={thisResort} 
                handleSubmitComment={handleSubmitComment} 
            /> 
            : 
            <Link to={`/login`} rel="noreferrer">
                Login
            </Link>  
            }
        </Box>
        </div>
    )
}

export default ResortDetail;