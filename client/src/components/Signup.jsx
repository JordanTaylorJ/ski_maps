import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserContext } from "../context/user";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]); 
    const {setUser} = useContext(UserContext);
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password 
            })
        })
        .then(r => {
            if (r.ok){
                r.json().then((r) => setUser(r))
                setErrors([])
                nav("/");
            } else {
                r.json().then((r) => setErrors(r.errors))
            }    
        })
    }

    return(
        <div className='center'>
        <Box
            sx={{ mx: 'auto', width: 900, p: 1, m: 1, mt:10,}}
        >
        <Typography gutterBottom variant="h4" component="div">
            SignUp
        </Typography>
        <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                id="standard-basic" 
                label="Username" 
                variant="standard" 
                type='text'
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <TextField 
                id="standard-basic" 
                label="Password" 
                variant="standard" 
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type='submit' 
                value="submit"
            >
                Create Account
            </Button>
        </Box>
        {errors.map((error) => 
            <p key={error}>{error}</p>
        )}
        <br/>
        <Typography gutterBottom variant="h7">Already have an account? </Typography>
        <br/>
        <Link to={`/login`} rel="noreferrer">
            Login
        </Link>  
        </Box>
        </div>
    )
}

export default Signup;