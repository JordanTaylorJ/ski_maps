import React from 'react';
import ReactMapGL, { Layer } from 'react-map-gl';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const ResortFilter = () => {

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
                <FormControlLabel control={<Checkbox ></Checkbox>} label='Terrain Park' />
                <FormControlLabel control={<Checkbox ></Checkbox>} label='Night Skiing' />
            </FormGroup>    
        </Box>
    )

}

export default ResortFilter;