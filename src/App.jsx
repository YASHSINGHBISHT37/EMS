import React from 'react'
import FullPage from './pages/FullPage'
import Nav from './components/navigation/Nav'
import Footer from './components/navigation/Footer'
import Search from './Search'
import Create from './pages/Create'

export default function App() {

  return (
    <div className='w-screen h-screen overflow-hidden flex gap-2 p- bg-transparent bg-linear-to-t from-blue-900 to-bg-muted-bg'>
      <Nav />

      <div className='bg-b border border-border-10 rounde h-full flex-1 flex flex-col items-center overflow-y-scroll scrollbar-hide pb-4 relative pt-16'>
        <div className='w-7xl bg-bg rounded-3xl'>

          <FullPage />
          {/* <Create /> */}
          {/* <Search/> */}

        </div>
      </div>
    </div>
  )
}




