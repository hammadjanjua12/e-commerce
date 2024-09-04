import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     if(jwt){
    //         dispatch(getUser(jwt))
    //     }
    // },[jwt,auth.jwt])
    const handleSubmit=(event)=>{
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const userData ={
            email:data.get("email"),
            password:data.get("password")
        }
        //for login
        dispatch(login(userData))

        console.log("User Data :" ,userData)
    }
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', paddingBottom: '20px', backgroundColor: '#333333', color: '#ffffff' }}>
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', padding: '20px', margin: '0', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: '#ffffff', marginBottom: '0' }}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete='email'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete='password'
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    className='bg-[#9155FD] w-full'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
                >
                    Login
                </Button>
            </Grid>
        </Grid>
    </form>
</div>
<div className='flex justify-center flex-col items-center bg-gray-800 text-white'>
    <div className='py-3 flex items-center mt-4'> {/* Adjusted margin top here */}
        <p>
            If you don't have an account?
        </p>
        <Button onClick={() => navigate("/register")} className='ml-5' size='small'>
            Register
        </Button>
    </div>
</div>

</>


  )
}

export default LoginForm