import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const ResortFilter = ({resorts}) => {

    const [filteredResorts, setFilteredResorts] = useState(resorts)
    const [filters, setFilters] = useState({terrain: false, night: false})
    
    const handleChange = (e) => {
        setFilters({...filters, [e.target.name]:e.target.checked})
        fetch(`/api/resorts/${filters.toString()}`) 
        .then(r => r.json())
        .then(data => setFilteredResorts(data))
    }
    console.log('what is changing', filters)
    console.log('the resorts filtered', filteredResorts)

    const handleSubmit = (e) => {
        //
        e.preventDefault(); 
        fetch(`/api/resorts/${filters}`) 
        .then(r => r.json())
        .then(data => setFilteredResorts(data))
    }

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
                <FormControlLabel control={<Checkbox value={filters.terrain} name='terrain' onChange={(e) => handleChange(e)}></Checkbox>} label='Terrain Park' />
                <FormControlLabel control={<Checkbox value={filters.night} name='night' onChange={(e) => handleChange(e)} ></Checkbox>} label='Night Skiing' />
            </FormGroup>    
        </Box>
    )

}

export default ResortFilter;