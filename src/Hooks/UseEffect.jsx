import React, { useEffect } from 'react'

const UseEffect = () => {
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>console.log(data))
    },[])
  return (
    <div> </div>
  )
}

export default UseEffect