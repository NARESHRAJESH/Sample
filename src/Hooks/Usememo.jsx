import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const[number, setNumber] = useState(0)

    const saqure = useMemo(()=>{
        return number * number
    })
  return (
    <div>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <p>{saqure}</p>
    </div>
  )
}

export default Usememo