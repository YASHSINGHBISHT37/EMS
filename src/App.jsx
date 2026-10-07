import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FullPage from './pages/FullPage'
import Nav from './components/navigation/Nav'
import Footer from './components/navigation/Footer'
import Search from './Search'
import Create from './pages/Create'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'
import Login from './pages/Login'
import DetailPage from './pages/DetailPage'

export default function App() {
  return (
    <div className='w-screen h-screen overflow-hidden flex gap-2 bg-[#161616'>
      <Nav />
      {/* <Login/> */}

      {/* <Blog/> */}

      <div className='bg-b h-full flex-1 flex flex-col items-center overflow-y-scroll scrollbar-hide relative'>
        <div className='w-full bg-white'>
          <Routes>
            {/* <Route path='/' element={<FullPage />} /> */}
            <Route path='/' element={<DetailPage />} />
            <Route path='/create' element={<Create />} />
            <Route path='/search' element={<Search />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </div>

        {/* <DetailPage/> */}

      </div>
      {/* <Footer/> */}

    </div>
  )
}