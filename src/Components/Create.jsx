import  Axios  from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  let navigate =useNavigate()
  let [details,setDetails]=useState({
    name:"",
    email:"",
    contact:"",
    degree:"",
    stream:"",
    percentage:""
  })
  let {name,email,degree,stream,percentage,contact}=details
  let handleChange=(e)=>{
    let{name,value}=e.target
    setDetails({...details,[name]:value})
  }
  let handleSubmit =(e)=>{
    e.preventDefault()
    Axios.post("http://localhost:3000/users",details)
    navigate("/")
  }
  return (
  
  <form onSubmit={handleSubmit} id='createuser'>
    <label htmlFor="name">Name: </label>
    <input type="text" name='name' id='name' value={name} onChange={handleChange} />
<br /><br />
    <label htmlFor="contact">Contact: </label>
    <input type="tel" name='contact' id='contact' value={contact} onChange={handleChange} />
    <br /><br />
    <label htmlFor="degree">Degree: </label>
    <input type="text" name='degree' id='degree' value={degree} onChange={handleChange} />
    <br /><br />
    <label htmlFor="email">Email: </label>
    <input type="text" name='email' id='email' value={email} onChange={handleChange} />
    <br /><br />
    <label htmlFor="stream">Stream: </label>
    <input type="text" name='stream' id='stream' value={stream} onChange={handleChange} />
    <br /><br />
    <label htmlFor="percentage">Percentage: </label>
    <input type="text" name='percentage' id='percentage' value={percentage} onChange={handleChange} />
    <br /><br />
    <input type="submit" value="ADD USER ➕" id='submit'/>
  </form>
  
  )
}

export default Create
