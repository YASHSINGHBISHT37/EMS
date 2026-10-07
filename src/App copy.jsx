import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FullPage from './pages/FullPage'
import Nav from './components/navigation/Nav'
import Footer from './components/navigation/Footer'
import Search from './Search'
import Create from './pages/Create'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <div className='w-screen h-screen overflow-hidden flex gap-2 p- bg-muted-bg bg-linear-to- from-blue-900 to-bg-muted-bg'>
      <Nav />

      <div className='bg-b border border-border-10 rounde h-full flex-1 flex flex-col items-center overflow-y-scroll scrollbar-hide pb-4 relative pt-16'>
        <div className='w-340 bg-bg rounded-3xl'>
          <Routes>
            <Route path='/' element={<FullPage />} />
            <Route path='/create' element={<Create />} />
            <Route path='/search' element={<Search />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
      <Footer/>

        </div>
      </div>
    </div>
  )
}