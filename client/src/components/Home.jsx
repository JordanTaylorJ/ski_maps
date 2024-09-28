import React, {useContext} from 'react';
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';

const Home = () => {
    
    const {user} = useContext(UserContext);

    return(
        <>
        <div className="box" >
            <img
                src='https://images.unsplash.com/photo-1602411135582-8bfcca8ad53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                alt='ski lift'
            />
        </div>
        <Box sx={{ 
            position: 'absolute', 
            left: '50%', 
            top: '60%',
            transform: 'translate(-50%, -50%)', 
            width: 650, 
            height: 650, 
            }}
        >
            <h2>Plan your next ski trip!</h2>
            <h3>View resort maps, reviews, and lift data.</h3>
            {user ?
                <h2>Welcome {user.username}</h2>
            : 
                <h3>Login to bookmark your favorites.</h3>
            }
             
        </Box>
        </>
    )   
}

export default Home;