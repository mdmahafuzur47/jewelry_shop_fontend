import React from 'react'
import Home from '../../pages/Home'
import HeadPart from '../../components/NavBar/HeadPart/HeadPart'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'


const Main = () => {
  return (
    <>
      <HeadPart/>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Main