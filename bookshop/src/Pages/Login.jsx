import { Box,Button, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import React, { useState } from 'react'

const Login = () => {
  const [isSignup, setIsSignup] =useState(false);
 const [inputs, setInput] = useState({
    Name: '', Emeil: '', Passward: ''
 });
 const handleChange = (e) =>{
    setInput((prevState)=>({
    ...prevState,
    [e.target.Name] : e.target.value
    }))
 }
 const handleSumbit = (e) => {
  e.preventDefault();
  console.log(inputs)
 };
 const resetState = () => {
  setIsSignup(!isSignup);
  setInput({Name: '',Email: '',Passward: ''})
 };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <Box display='flex' flexDirection={'column'} 
        maxWidth={400} 
        alignItems='center' 
        justifyContent={'center'}
        margin='auto'
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={'5px 5px 10px #ccc'}
        sx={{
            ':hover':{
                boxShadow: '10px 10px 20px #ccc',
            },
        }}>
         <Typography variant='h2' padding={3} textAlign='center' >
          {isSignup ? 'Signup' : 'Login'}
            </Typography >
         {isSignup &&
          (<TextField 
            Name='Name'
            value={inputs.Name}
         margin='normal' 
         type={'text'} 
         variant='outlined'
          placeholder='Name'/>
          )}

         <TextField 
         Name='Email'
         value={inputs.Email}
         margin='normal' 
         type={'Email'} 
         variant='outlined' 
         placeholder='Email'/>
        

         <TextField 
         Name='Passward'
         value={inputs.Passward}
         margin='normal' 
         type={'Password'} 
         variant='outlined' 
         placeholder='Password'/>
         

         <Button 
         endIcon={isSignup ? <HowToRegIcon/> : <LoginIcon/>}
         type='submit'
         sx={{ marginTop: 3, borderRadius: 3}} 
          variant='contained'
          color='warning'>
            {isSignup ? 'Signup' : 'LOGIN'}
            </Button>
            <Button onClick={resetState}
             sx={{ marginTop: 3, borderRadius: 3}} 
          variant='contained'
          >
           change to {isSignup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Login;
