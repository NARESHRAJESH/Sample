import React, { useRef } from 'react'

const Uncontrol = () => {
    const nameRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(nameRef.current.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">username</label>
            <input type="text" ref={nameRef}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Uncontrol

