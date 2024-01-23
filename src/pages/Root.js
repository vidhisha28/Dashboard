import React from 'react'
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <div className='root'>
      <Navigation />
      <main className='main'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Root;