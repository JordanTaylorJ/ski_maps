import React, {useContext} from 'react';
import { UserContext } from "../context/user";

const Home = () => {
    
    const {user} = useContext(UserContext);

    console.log(user, 'user ???')
    if (!user){
        return(
            <h1>Welcome</h1>
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