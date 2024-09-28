import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UserContext } from "../context/user";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);
    const {setUser} = useContext(UserContext);
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/login', {
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

    const handleClickShowPassword = () => {setShowPassword((show) =>!show)}
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <div className='center'>
        <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
            '& > :not(style)': { m: 1, width: '25ch', mt:15 },
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
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <Input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
            />
        </FormControl>
        <Button
            type='submit' 
            value="submit"
        >
            Sign In
        </Button>
        </Box>
        <p>{errors}</p>
        <br/>
        <Typography gutterBottom variant="h7">Need to create an account? </Typography>
        <br/>
        <Link to={`/signup`} rel="noreferrer">
            Signup
        </Link>       
      </div>
    )
}

export default Login; 