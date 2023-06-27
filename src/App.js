import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Routing/Routes'
// import store from './Store/store'

const App = () => {
  return (
    <>
    {/* <h1>E-commerce</h1> */}
    <RouterProvider router={router} />
    </>
  )
}

export default App