import React, {useContext} from 'react';
import { UserContext } from "../context/user";

const Home = () => {
    
    const user = useContext(UserContext);

    console.log(user, 'user ???')
    return(
        <>
            <h1>HOME</h1>
        </>
    )
}

export default Home;