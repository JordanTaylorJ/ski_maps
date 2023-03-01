import React, {useContext} from 'react';
import { useLocation } from "react-router-dom";
import NewComment from './NewComment';
import { UserContext } from "../context/user";

const ResortDetail = ({resorts}) => {

    let location = useLocation();
    const thisResort = resorts.find(resort => resort.id === parseInt(location.state.id));
    const {user} = useContext(UserContext);

    console.log(thisResort, 'resort whats here?')
    return(
        <>
            <h1>{thisResort.name}</h1>
            {thisResort.comments.map(c => {
                return(
                    <p key={c.id}>{c.comment}</p>
                )
            })}
            {user ? 
            <NewComment thisResort={thisResort} />
            : 
            <p>must login to comment</p>
            }
        </>
    )
}

export default ResortDetail;