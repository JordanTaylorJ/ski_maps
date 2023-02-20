import React, {useState, useMemo} from 'react';
import ReactMapGL, {Source, Layer, NavigationControl, FullscreenControl} from 'react-map-gl';
//import Pin from './Pin'

const Resorts = ({resorts}) => {
    
    console.log('are resorts coming in ??', resorts);
    
    //resorts.map((resort) => {console.log(resort.latitude)})

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

    const layerStyle = {
        id: 'point',
        type: 'circle',
        paint: {
            'circle-radius': 10,
            'circle-color': '#007cbf'
        }
    };

    //const skiData = [{type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}]

    



    const geojson = {
        type: 'FeatureCollection',
        features: [{type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}]
    };

    resorts.forEach((resort) => {        
        const obj = {
            type: 'Feature', geometry: {type: 'Point', coordinates: [resort.latitude, resort.longitude]}
        }
        geojson[features].push(obj)
        })  





    /*

    //nearly there but lets try something else... fuck

    const geojson = {
        type: 'FeatureCollection',
        features: []
    };

    const skiData = useMemo(() => {
        resorts.forEach((resort) => {
            const obj = {
                type: 'Feature', geometry: {type: 'Point', coordinates: [resort.latitude, resort.longitude]}
            }
            geojson.features.push(obj)
        })
        
    }, [resorts]);

    */



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
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
            </Source>
        </ReactMapGL>
    )
}

export default Resorts;



    /*

    //Using Marker and Pin

 
    const markers = resorts.map((resort) => 
<Source 
coordinates={[resort.lattitube, resort.longitude]}
properties={resort.name}
/>
)

   const markers = useMemo(() => resorts.map(resort =>
        <Marker 
            key={resort.id}
            latitude={resort.latitude}
            longitude={resort.longitude}
            anchor='bottom'
        >
            <svg>
                Some shit here
            </svg>
            <Pin />
        </Marker>
    ), [resorts]);


    */


/*





//single pin 


            <Marker 
                latitude='40'
                longitude='-100'
                anchor='bottom'
            >
                <Pin />
            </Marker>


*/


/*   
//Using Layer and Feature

            

                


        



    const geojson = {
        type: 'FeatureCollection',
        features: [
          {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
        ]
    };

    const geojson = {
        type: 'FeatureCollection',
        features: [
          {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}},
          {type: 'Feature', geometry: {type: 'Point', coordinates: [-127.4, 37.8]}}
        ]
    };

    const skiData = useMemo(() => {
        return allData && updatePercentiles(allData, s => s.properties.income[year]);
      }, [allData, year]);










    const geojson = {
        type: 'FeatureCollection',
        features: [{
            resorts.forEach((resort) => {
                    type: 'Feature', geometry: {type: 'Point', coordinates: [{resort.latitude}, {resort.longitude}]}
            })
        }]
    };


    */