import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigate, useNavigate } from 'react-router-dom'
import { getUser, register } from '../../State/Auth/Action'
import { store } from '../../State/store'

const RegisterForm = () => {
    const navigate = useNavigate()
    //dispatch action
    const dispatch = useDispatch();
    // jwt import
    const jwt = localStorage.getItem("jwt")
    //access token
    const {auth} = useSelector(store=>store)
    // token store in localstorage
    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt))
        }
    },[jwt,auth.jwt])

  

    const handleSubmit=(event)=>{
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const userData ={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(register(userData))
        console.log("REGISTATION FORM DATA :" ,userData)
    }
  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor: '#333333' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete='given-name'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete='given-name'
            />
          </Grid>
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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
        <div
        className='flex justify-center flex-col items-center bg-gray-800 text-white'
        >
            <div
            className='py-1 flex items-center'
            > 
                <p>
                    if you have already account ?
                </p>
                <Button on onClick={()=>navigate("/login")}
                className='ml-5' size='small'
                >Login</Button>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm