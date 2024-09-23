import React, { useContext, useState, useEffect } from 'react';
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
    const [thisResort, setThisResort] = useState({
        id: resorts?.find((resort) => resort.name === params.name).id,
        name: "Loading",
        website: "",
        elevation: 0,
        terrain_park: false,
        night_skiing: false,
        lift_count: 0,
        run_count: 0,
        map_image: ''
    });
    const {user} = useContext(UserContext);
    const [comments, setComments] = useState(thisResort.comments)
    
    useEffect(() => {
        fetch('/api/resorts/show')
        .then(r => r.json())
        .then((resorts) => {
            const newResort =(resorts.find((resort) => resort.name === params.name)) 
            setThisResort(newResort)
            setComments(newResort.comments)
        })
    }, [params]);
    

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
    
    if (resorts) {
    return(
        <div className='center'>
        <Box sx={{m:4}}>
            <h1>{thisResort.name}</h1>
            <Card sx={{ maxWidth: 1000 }} >
            <CardMedia
                sx={{ height: 540 }}
                conmponent="img"
                height="500"
                image={thisResort.map_image}
            />
            <CardContent>
                
                <Typography component='div' variant="body2" color="text.secondary">
                    <Box>Vertical Elevation: {thisResort.elevation}ft</Box>
                    <Box>Lifts: {thisResort.lift_count}</Box>
                    <Box>Runs: {thisResort.run_count}</Box>
                    {thisResort.terrain_park === true && 
                    <Box>Terrain Park</Box>
                    }
                    {thisResort.night_skiing === true && 
                    <Box>Night Skiing</Box>
                    }
                </Typography>
                <a href={thisResort.website} target="_blank" rel="noreferrer">
                    <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path><path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line><line x1="32" y1="6.99" x2="32" y2="56.7"></line><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path></g></svg>
                </a> 
                {user ? 
                <NewBookmark resort={thisResort}/>
                : null }
            </CardContent>
            </Card>
            {comments ?
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
    } else {
        <>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
        </>
    }
}

export default ResortDetail;