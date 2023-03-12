import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserContext } from "../context/user";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const {setUser} = useContext(UserContext);
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST', 
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username, 
                password
            })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then(r => setUser(r))
                setErrors([])
                nav("/");
            } else {
                r.json().then(r => setErrors(r.error))
            }
        })
    }

    return(
        <div class='center'>
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
            Sign In
        </Button>
      </Box>
      <p>{errors}</p>
      <h3>New Here?</h3>
        <Link to={`/signup`} rel="noreferrer">
            CreateAccount
        </Link>       
      </div>
    )
}

export default Login; 