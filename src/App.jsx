import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Edit from './Components/Edit'
import Read from './Components/Read'
import PageNotFound from './Components/PageNotFound'
import "./Student.css"
let routes= createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
path:"/create",
element:<Create/>
    },
    {
        path:`/edit/:id`,
        element:<Edit/>
    },
    {
        path:`/read/:id`,
        element:<Read/>
    },
    {
        path:"*",
        element:<PageNotFound/>
    }

])
const App = () => {
  return (
    <>
    <RouterProvider router={routes}/>
   
    </>
   
  )
}

export default App
