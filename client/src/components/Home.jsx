import React, {useContext} from 'react';
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';

const Home = () => {
    
    const {user} = useContext(UserContext);

    if (!user){
        return(
            <Box sx={{ 
                position: 'absolute', 
                left: '50%', 
                top: '55%',
                transform: 'translate(-50%, -50%)', 
                width: 650, 
                height: 650, 
                }}
            >
            <h2>Plan your next ski trip! Login to join</h2>  
                <div className="box" >
                    <img
                        src='https://images.unsplash.com/photo-1602411135582-8bfcca8ad53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                        alt='ski lift'
                    />
                </div>
            </Box>
        )
    } else {
        return(
            <>
                <h1>HOME</h1>
                <p>{`Welcome ${user.username}`}</p>
            </>
        )
    }
    
}

export default Home;