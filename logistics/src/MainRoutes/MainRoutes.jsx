import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Page/Home'
import { Contact } from '../Page/Contact'
import { About } from '../Page/About'
import { Services } from '../Page/Services'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:serviceName' element={<Services />} />
    </Routes>
  )
}
