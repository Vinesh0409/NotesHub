import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Landing from './pages/Landing'
import { ToastContainer,Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const router = createBrowserRouter([
    {
      path: '/register',
      element: <Register />,
    },
    {
      path:'/',
      element: <Landing/>
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    }
  ])

  return (
    <>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
