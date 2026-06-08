import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Landing from './pages/Landing'

function App() {
  const router = createBrowserRouter([
    {
      path: '/register',
      element: <Register />,
    },
    {
      path:'/',
      element: <Landing/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
