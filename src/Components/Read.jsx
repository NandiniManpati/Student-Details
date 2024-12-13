import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Read = () => {
  let {id}=useParams()
  let navigate=useNavigate()
  let [individual,setIndividual]=useState(null)
  useEffect(()=>{
    let readData =async()=>{
      let {data}=await Axios.get(`http://localhost:3000/users/${id}`)
      setIndividual(data)

    }
    readData()
  },[]    
  )
  let handleHome=()=>{
    navigate("/")
  }
  let handleEdit=()=>{
    navigate(`/edit/${id}`)
  }
  
  return (
 <>
 {individual==null?"loding":<>
  <div id='readstudents'>
  <h1>Name: {individual.name}</h1><br />
  <h1>Email: {individual.email}</h1><br />
  <h1>Contact: {individual.contact}</h1><br />
  <h1>Degree: {individual.degree}</h1><br />
  <h1>Stream: {individual.stream}</h1><br />
  <h1>Percentage: {individual.percentage}</h1><br />
 <button onClick={handleHome} id='homebutton'> Go back to home</button><br /><br />
  <button onClick={handleEdit} id='editbutton'> edit user</button><br />
  </div>
  </>
 }
 </>
  )
}

export default Read
