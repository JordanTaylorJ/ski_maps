import React, {useState, useMemo} from 'react';
import { useNavigate } from "react-router-dom";
import ReactMapGL, {Marker, NavigationControl, FullscreenControl} from 'react-map-gl';
import Pin from './Pin'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import NewBookmark from './NewBookmark';


const ResortsMap = ({resorts}) => {

    const [selectedResort, setSelectedResort] = useState(null);
    const [viewport, setViewport] = useState({
        longitude: -105.7821,
        latitude: 39.5501,
        zoom: 6
    });

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

    let navigate = useNavigate();
    
    const detailRouteChange = (event) => {
        let path = '/resortdetail'
        navigate(path, { state: { id: event.target.id} } );
    }

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
        <Pin />
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
                <Button 
                    id={selectedResort.id}
                    value={selectedResort.name}
                    onClick={(e) => detailRouteChange(e)}
                >
                    View Details
                </Button>
                <NewBookmark/>
            </Box>
            </Modal>
            : null}
        </ReactMapGL>
    )
}

export default ResortsMap;