import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h2'>Sign Up</Typography>
        <br /><br />
        <TextField variant='outlined' label='Name'></TextField>
        <br /><br />
        <TextField variant='outlined' label='Place'></TextField>
        <br /><br />
        <TextField variant='outlined' label='Age'></TextField>
        <br /><br />
        <TextField variant='outlined' label='Gender'></TextField>
        <br /><br />
        <TextField variant='outlined' label='Email'></TextField>
        <br /><br />
        <TextField variant='outlined' label='Password' type='password'></TextField>
        <br /><br />
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup