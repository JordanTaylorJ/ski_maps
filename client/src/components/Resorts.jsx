import React, {useState} from 'react';
import ReactMapGL, {  Marker, NavigationControl, FullscreenControl} from 'react-map-gl';


const Resorts = ({resorts}) => {
    
    console.log('are resorts coming in ??', resorts);
    
    const [viewport, setViewport] = useState({
        longitude: -100,
        latitude: 40,
        zoom: 4
    });

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

    return(
        <ReactMapGL
            {...viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            //initialViewState={{
            //    longitude: -100,
            //    latitude: 40,
            //    zoom: 3.5,
            //}}
            onMove={evt => setViewport(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            transitionDuration='200'
            style={{width: '100%', height: '100vh'}}
        > 
            {resorts.map((resort) => {
                <Marker 
                    key={resort.id}
                    latitude={resort.latitude}
                    longitude={resort.longitude}
                >
                    HEY!
                </Marker>
            })}
            <FullscreenControl style={fullscreenControlStyle} />
            <NavigationControl style={navStyle} />
        </ReactMapGL>
    )
}

export default Resorts;