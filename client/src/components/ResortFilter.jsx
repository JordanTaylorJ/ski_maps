import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const ResortFilter = ({resorts}) => {
    
    const [filterResorts, setFilterResorts] = useState(resorts)
    const [night, setNight] = useState(false)
    const [terrain, setTerrain] = useState(false)
    
    const handleChangeNight = (event) => {
        setNight(event.target.checked);
        handleFilter()
    };
    const handleChangeTerrain = (event) => {
        setTerrain(event.target.checked);
        handleFilter()
    };

    const handleFilter = () => {
        if (night === true && terrain === true){
            const both = resorts.filter((resort) => resort.night_skiing === true && resort.terrain_park === true)
            setFilterResorts(both);
        } else if (night === true && terrain === false){
            const nightFilter = resorts.filter((resort) => resort.night_skiing === true)
            setFilterResorts(nightFilter);
        } else if (night === false && terrain === true) {
            const terrainFilter = resorts.filter((resort) => resort.terrain_park === true)
            setFilterResorts(terrainFilter);
        } else if (night === false && terrain === false){
            setFilterResorts(resorts);
        }
        console.log('filtered', filterResorts)
    }

/*
    const handleFilterNight = (event) => {
        //setChecked(event.target.checked);
        if (true) {
            const nightFilter = filterResorts.filter((resort) => resort.night_skiing === true)
            setFilterResorts(nightFilter)
        } else{
            setFilterResorts(resorts)
            console.log('night')
        }
    }
    const handleFilterTerrain = (event) => {
        console.log('terrain')
        const terrainFilter = filterResorts.filter((resort) => resort.terrain_park === true)
        setFilterResorts(terrainFilter)
    }
    */

    return(
        <>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={night} onChange={handleChangeNight} />} label="Night Skiing" />
            <FormControlLabel control={<Checkbox checked={terrain} onChange={handleChangeTerrain} />} label="Terrain Parks" />
        </FormGroup>
        {filterResorts.map(resort => {
            return(
                <div key={resort.index}>
                    <p>{resort.index}{resort.name}</p>
                </div>
            )
        })}
        </>
    )
}

export default ResortFilter;