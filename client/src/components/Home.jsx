import React, {useContext} from 'react';
import { UserContext } from "../context/user";

const Home = () => {
    
    const user = useContext(UserContext);

    return(
        <>
            <h1>HOME</h1>
            <p>{user}</p>
        </>
    )
}

export default Home;