import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Typography variant='h1'>Login</Typography><br />
        <TextField variant='outlined' label='Username'/><br /><br />
        <Button variant='outlined'>Submit</Button>
    </div>
    
  )
}

export default Login