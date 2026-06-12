import React, { useEffect, useState } from 'react'

const Crud = () => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[user, setUser] = useState([])
    const[editid, setEditid] = useState(null)

    const api = "https://69ff06738c70b15fa3cafada.mockapi.io/student"


    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(username==="" || password===""){
            alert("fill all the feilds")
            return
        }

        const obj = {
            username,
            password
        }

        try{
            if(editid){
                fetch(`${api}/${editid}`,{
                    method:"PUT",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(obj)
                })
                setEditid(null)
            }
            else{
                fetch(api, {
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(obj)
                })
                alert('data uploaded')
            }
             alert("data updated")
            setUsername("")
            setPassword("")
            fetchUser()
           

        }catch(err){
            console.log(err)
        }
    }



    const handelEdit = (item) =>{
        setUsername(item.username)
        setPassword(item.password)
        setEditid(item.id)
    }

    const fetchUser = async()=>{
        const response = await fetch(api)
        const data = await response.json()
        setUser(data)
        // window.location.reload()
    }

    useEffect(()=>{
        fetchUser()
    },[])


    const handledelete = (id)=>{
        fetch(`${api}/${id}`, {
            method:"DELETE"
        })
        alert("data deleted")
        window.location.reload()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>

            <label>Password</label>
            <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button>Submit</button>
        </form>
        <br></br><br></br>

        <table>
            <thead>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
            </thead>
            <tbody>
                {user.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.username}</td>
                        <td>{item.password}</td>
                        <td><button onClick={()=>handelEdit(item)}>Edit</button> <button onClick={()=>handledelete(item.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Crud