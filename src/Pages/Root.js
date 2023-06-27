import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterPage from './FooterPage'
import NavBar from './NavBar'

const Root = () => {
  return (
    <React.Fragment>
    <NavBar />
    <Outlet />
    <FooterPage />
    </React.Fragment>
  )
}

export default Root