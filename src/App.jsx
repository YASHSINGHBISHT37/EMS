import React from 'react'
import FullPage from './FullPage'
import Nav from './components/navigation/Nav'
import Footer from './components/navigation/Footer'
import Search from './Search'
import SideBar from './components/navigation/SideBar'

export default function App() {

  return (
    <div className='w-screen h-screen overflow-hidden flex gap-2 px-60 p-1 bg-transparent bg-linear-to-t from-blue-900 to-bg-muted-bg'>
      <div className='border border-border-10 rounded-3xl h-full bg-bg w-70'>
        <SideBar />
      </div>

      <div className='border border-border-10 rounded-3xl h-full bg-bg flex-1 flex justify-center overflow-y-scroll scrollbar-hide py-4'>
        <FullPage />
      </div>
    </div>
  )
}




