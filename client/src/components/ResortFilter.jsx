import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const ResortFilter = ({setFilteredResorts}) => {

    const [filters, setFilters] = useState({terrain_park: false, night_skiing: false})

    const handleChange = (e) => {   
        setFilters({...filters, [e.target.name]: e.target.checked})
    }
    
    useEffect(() => {
        const params = encodeURIComponent(JSON.stringify(filters))
        fetch(`/api/resorts/filters?data=${params}`) 
        .then(r => r.json())
        .then(data => setFilteredResorts(data))
    }, [filters, setFilteredResorts])

    return(
        <Box
            height={100}
            width={200}
            m={4}
            alignItems="center"
            position='absolute'
            p={2}
            bgcolor='white'
            sx={{ border: '2px solid grey' }}
        >
            <FormGroup>
                <FormControlLabel control={<Checkbox type='checkbox' checked={filters.terrain_park} name='terrain_park' onChange={handleChange}></Checkbox>} label='Terrain Park' />
                <FormControlLabel control={<Checkbox type='checkbox' checked={filters.night_skiing} name='night_skiing' onChange={handleChange} ></Checkbox>} label='Night Skiing' />
            </FormGroup>  
        </Box>
    )
}

export default ResortFilter;