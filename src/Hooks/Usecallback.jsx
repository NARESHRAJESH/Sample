import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const[count, setCount] = useState(1)

    const handleClick = useCallback(()=>{
        setCount(count * 2)
    })
  return (
    <div>
        <button onClick={handleClick}>submit</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Usecallback