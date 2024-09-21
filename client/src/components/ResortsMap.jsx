import React, {useState, useMemo, useContext} from 'react';
import { Link } from "react-router-dom";
import ReactMapGL, {Marker, NavigationControl, FullscreenControl} from 'react-map-gl';
import { UserContext } from "../context/user";
import Pin from './Pin'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ButtonBase from '@mui/material/ButtonBase';
import Modal from '@mui/material/Modal';
import NewBookmark from './NewBookmark';



const ResortsMap = ({resorts}) => {

    const [selectedResort, setSelectedResort] = useState(null);
    const [viewport, setViewport] = useState({
        longitude: -105.881866,
        latitude: 38.507438,
        zoom: 6
    });
    const {user} = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fullscreenControlStyle = {
        top: 70,
        left: 0,
        padding: "10px",
    };

    const navStyle = {
        top: 110,
        left: 0,
        padding: "10px",
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const markers = useMemo(() => resorts.map(resort =>    
        <Marker 
            key={resort.id}
            latitude={resort.latitude}
            longitude={resort.longitude}
            anchor='bottom'
            onClick={() => {
                setSelectedResort(resort)
                handleOpen()
            }}
        >
        <Tooltip title={resort.name}>
            <ButtonBase>
                <Pin/>
            </ButtonBase>
        </Tooltip>
        </Marker>  
    ), [resorts]);

    return(
        <ReactMapGL
            {...viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onMove={evt => setViewport(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            transitionDuration='200'
            style={{width: '100%', height: '100vh'}}
        > 
            <FullscreenControl style={fullscreenControlStyle} />
            <NavigationControl style={navStyle} />
            {markers}
            {selectedResort ? 
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {selectedResort.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {selectedResort.website}
                </Typography>
                <Link to={`/resorts/${selectedResort.name}`}>
                    View Details
                </Link>       
                {user ? 
                <NewBookmark resort={selectedResort}/>
                : null }
            </Box>
            </Modal>
            : null}
        </ReactMapGL>
    )
}

export default ResortsMap;