import React, { useState } from 'react'

const Form = () => {
    const[formData, setFormData] = useState({
        username:"",
        email:"",
        password:""
    })

    const[error, setError] = useState({})

    const validate = () =>{
        const newError = {}

        if(!formData.username) newError.username = "Enter username"

        if(!formData.email) newError.email = "Enter email"

        else if(!/\S+@\S+.\S/.test(formData.email)) newError.email = "Enter valid email"

        if(!formData.password) newError.password = "Enter password"

        else if(formData.password.length < 6)  newError.password = "password should contain atleast 6 char"

        else if(!/[A-Z]/.test(formData.password)) newError.password = "password should contain atleast 1 uppercase"

        return newError
        }


        const handleChange = (e) =>{
            const{name, value} = e.target

            setFormData({
                ...formData,
                [name]:value
            })
        }


        const handleSubmit = (e) =>{
            e.preventDefault()

            const validation = validate()

            if(Object.keys(validation).length===0){
                console.log(formData)

                setFormData({
                    username:"",
                    email:"",
                    password:"",
                })
            }
            else{
                setError(validation)
            }
        }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className='form-control'/>
            {error.username && <p style={{color:"red"}}>{error.username}</p>}
            <label>Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} className='form-control'/>
            {error.email && <p style={{color:"red"}}>{error.email}</p>}
            <label>Password</label>
            <input type="text" name="password" value={formData.password} onChange={handleChange} className='form-control'/>
            {error.password && <p style={{color:"red"}}>{error.password}</p>}
            <button className='btn btn-danger'>Submit</button>
        </form>
    </div>
  )
}

export default Form

//controlled - validation, script
//, uncontrolled - dom