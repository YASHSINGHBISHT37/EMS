import React from 'react'
import FullPage from './FullPage'
import Nav from './components/navigation/Nav'
import Footer from './components/navigation/Footer'

export default function App() {
  return (
    <div className='w-screen min-h-screen relative overflow-y-hidden'>
      <Nav />

      <div className='px-90 pt-20'>
        <h1 className='text-muted-text text-sm tracking-tight pl-4 mb-3 flex items-center gap-1'>
        <i className="ph ph-house text-lg"></i>
          
          / Hackathon / Hacks 2026 – Hub for Advanced Creativity, Knowledge & Solutions</h1>
        <FullPage />
      </div>

      <Footer />
    </div>
  )
}
