import React, {useState, useRef, useCallback} from 'react';
import ReactMapGL, {  Marker, NavigationControl, FullscreenControl} from 'react-map-gl';


const Resorts = ({resorts}) => {
    
    console.log('are resorts coming in ??', resorts);
    
    const [viewport, setViewport] = useState({
        longitude: -101.2996,
        latitude: 47.1164,
        zoom: 6
    });

    const mapRef = useRef();

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
            ref={mapRef}
            
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5,
            }}
            onViewportChange={setViewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            transitionDuration='200'

            style={{width: '100%', height: '100vh'}}
            //width="100%"
            //height="100vh"
            
        > 
            {resorts.map((resort) => {
                <Marker 
                    key={resort.id}
                    latitude={resort.latitude}
                    longitude={resort.longitude}
                >
                    <button>
                        YOOO
                    </button>
                </Marker>
            })}
            <FullscreenControl style={fullscreenControlStyle} />
            <NavigationControl style={navStyle} />
        </ReactMapGL>
    )
}

export default Resorts;