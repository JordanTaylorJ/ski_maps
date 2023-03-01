import React from 'react';
import { useLocation } from "react-router-dom";

const ResortDetail = ({resorts}) => {

    let location = useLocation();
    const thisResort = resorts.find(resort => resort.id === parseInt(location.state.id));

    console.log(thisResort, 'resort whats here?')
    return(
        <>
            <h1>{thisResort.name}</h1>
            {thisResort.comments.map(c => {
                return(
                    <p key={c.id}>{c.comment}</p>
                )
            })}
        </>
    )
}

export default ResortDetail;