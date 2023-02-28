import React from 'react';
import { useLocation } from "react-router-dom";

const ResortDetail = ({resorts}) => {

    let location = useLocation();
    const thisResort = resorts.find(resort => resort.id === parseInt(location.state.id));

    return(
        <>
            <p>details here</p>
            <p>{thisResort.name}</p>
        </>
    )
}

export default ResortDetail;