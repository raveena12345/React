import React, { useState } from 'react'

const Mapping = () => {
  var [names, setNames] = useState(["Raveena", "Sinto", "Dona", "Anita"])
  return (

    <div>
        <div>
            <ul>
                {names.map((value, index)=>{
                return(
                    <li>{value}</li>
                )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Mapping