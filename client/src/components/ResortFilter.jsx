import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const ResortFilter = ({resorts}) => {

    const [filteredResorts, setFilteredResorts] = useState(resorts)
    const [filters, setFilters] = useState({terrain_park: false, night_skiing: false})

    const handleChange = (e) => {   
        setFilters({...filters, [e.target.name]: e.target.checked})
        //handleSubmit(filters)
    }

    const handleSubmit = (filters) => {
        const params = encodeURIComponent(JSON.stringify(filters))
        console.log('params', params)
        fetch(`/api/resorts/filters?data=${params}`) 
        .then(r => r.json())
        //.then(data => console.log('returned', data))
        .then(data => setFilteredResorts(data))
    }

    return(
        <Box
            height={100}s
            width={200}
            m={4}
            alignItems="center"
            position='absolute'
            p={2}
            bgcolor='white'
            sx={{ border: '2px solid grey' }}
        >
            <FormGroup>
                <FormControlLabel control={<input type='checkbox' checked={filters.terrain_park} name='terrain_park' onChange={handleChange}></input>} label='Terrain Park' />
                <FormControlLabel control={<input type='checkbox' checked={filters.night_skiing} name='night_skiing' onChange={handleChange} ></input>} label='Night Skiing' />
            </FormGroup>  
        </Box>
    )
}

export default ResortFilter;

/*
             console.log('what type', typeof filters.terrain)

            <input type='checkbox' checked={false} value='terrain' onChange={handleChange} />
            

            

            if (e.target.checked){
            setFilters([...filters, e.target.value])
        } else {
            setFilters(filters.filter((item) => item !== e.target.value))
        }



            console.log('what', typeof filters.terrain)
    const handleChange = (e) => {
        
        setFilters({...filters, [e.target.name]: e.target.checked})
        console.log('what happends here', filters)
        //handleSubmit(filters)


                
        console.log('what happends here', filters)
        handleSubmit(filters)

        {terrain: true, night: false}



                if (e.target.checked){
            setFilters([...filters, e.target.value])
        } else {
            setFilters(filters.filter((item) => item !== e.target.value))
        }


                   <FormGroup>
                <FormControlLabel control={<input type='checkbox' checked={filters.terrain_park} name='terrain_park' onChange={handleChange}></input>} label='Terrain Park' />
                <FormControlLabel control={<input type='checkbox' checked={filters.night_skiing} name='night_skiing' onChange={handleChange} ></input>} label='Night Skiing' />
            </FormGroup>  

            */