import React from 'react';
import ReactMapGL, { Layer } from 'react-map-gl';
import Box from '@mui/material/Box';

const ResortFilter = () => {

    return(
        <Box
            height={200}
            width={200}
            m={4}
            display="flex"
            alignItems="center"
            position='absolute'
            p={2}
            bg='white'
            sx={{ border: '2px solid grey' }}
        >
        <p>this box will have a filter to filter search results</p>
        </Box>
    )

}

export default ResortFilter;