import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate=useNavigate()
    let [users,setUsers]= useState(null)
    useEffect(()=>{
        let fetchData =async()=>{
            let {data}=await Axios.get("http://localhost:3000/users")
            setUsers(data)
        }
        fetchData()
    },[])
    let handleCreateUser=()=>{
        navigate("/create")
    }
    let handleRead=(id)=>{
        navigate(`/read/${id}`)
    }
    let handleDelete=(id)=>{
        Axios.delete(`http://localhost:3000/users/${id}`)
        location.reload()
    }
    let handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }
  return (
<>
<button onClick={handleCreateUser} id='adduser'>ADD USER➕</button>
<br /><br />
<table width="100%" border="5" id='studentdetails'>
    <thead>
        <tr>
            <th>SI.NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Degree</th>
            <th>Stream</th>
            <th>percentage</th>
        </tr>
    </thead>
    <tbody id='students_details'>
        {users==null?<tr><td>Loading...</td></tr>:users.map((ele,index)=>{
            return <tr key={ele.id}>
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.contact}</td>
                <td>{ele.degree}</td>
                <td>{ele.stream}</td>
                <td>{ele.percentage}</td>
                <td><button onClick={()=>handleEdit(ele.id)} id='edit'>EDIT</button></td>
                <td><button onClick={()=>handleRead(ele.id)} id='read'>READ</button></td>
                <td><button onClick={()=>handleDelete(ele.id)} id='delete'>DELETE</button></td>
                <br /><br />
            </tr>
        })}
    </tbody>
</table>
</>
  )
}

export default Home
