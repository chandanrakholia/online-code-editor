import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
function Layout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Layout