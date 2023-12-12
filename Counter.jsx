import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'


const Counter = () => {
    var [count, setCount]= useState(0)

const inc = () => {
    setCount(count+1)
}
const dec = () => {
    if(count>0){
        setCount(count-1)
    }
}
  return (
    <div>
        <Typography>Count : {count}</Typography>
        <Button variant='contained' color="success" onClick={inc}>+</Button>&nbsp;&nbsp;
        <Button variant='contained' color="error" onClick={dec}>-</Button>
    </div>
  )
}

export default Counter