import React, { useState } from 'react'

const Usestate = () => {
    const[count, setCount] = useState(1)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Click</button>
        <button onClick={()=>setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default Usestate

//hooks - store the state in functional component