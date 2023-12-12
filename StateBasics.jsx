import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  //var name="Raveena"
  var [fname,setFname] = useState("Raveena")
  var[val,setVal]=useState()

const changeName=()=>{
  console.log("Clicked")
  setFname(val)
  setVal("")
}

const inputHandler= (e)=>{
  console.log(e.target.value)
  setVal(e.target.value)
}
  return (
    <div>
        <Typography>My Name is {fname}</Typography>
        <TextField variant='outlined' label='Enter Name' onChange={inputHandler} value={val}/><br /><br />
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics