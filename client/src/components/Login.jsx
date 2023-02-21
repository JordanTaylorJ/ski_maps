import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserContext } from "../context/user";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const {user, setUser} = useContext(UserContext);

    console.log('user', user);

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
      </div>
    )
}

export default Login; 