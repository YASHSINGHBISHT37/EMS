import React from 'react'
import FullPage from './FullPage'
import Nav from './components/navigation/Nav'
import Footer from './components/navigation/Footer'
import Search from './Search'

export default function App() {
  const navOpts = [
    { icon: 'house', title: 'Home' },
    { icon: 'code-simple', title: 'Hackathons' },
    { icon: '', title: 'Home' },
    { icon: '', title: 'Home' },
    { icon: '', title: 'Home' }
  ]
  return (
    <div className='w-screen min-h-screen relative overflow-y-hidden p-2 bg-transparent bg-linear-to-t from-blue-700 to-bg-muted-bg'>
      {/* <Nav /> */}

      {/* <div className='w-64 h-full border border-border-10 rounded-3xl bg-bg p- px- justify-between flex flex-col'>
        <div className='p-4'> 
          <h1 className='font-bold text-3xl tracking-tighter mb-6'>MeeShee.</h1>

          <div className='flex text-blue-800 font-bold items-center justify-center gap-2 border border-border-10 rounded-full p-2 pr-3 shadow-[inset_0_0_6px_2px_rgba(37,99,235,0.3)] cursor-pointer hover:shadow-[inset_0_0_8px_3px_rgba(37,99,235,0.5)] transition-shadow ease-in-out duration-300'>
            <i className='ph ph-plus text-xl'></i>
            <h1>Create</h1>
          </div>

          <div className=''>
            {navOpts.map((item, i) => (
              <div className='flex items-center gap-2 hover:bg-bg hover:border hover:border-border-10 cursor-pointer rounded-xl  p-2 px-2'>
                <i className={`ph ph-${item.icon} text-xl`}></i>
                <h1 className='text-muted-tet tracking-tight text-sm'>{item.title}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-3 border-t p-2 border-border-10'>
          <div className='w-10 h-10 border border-border-20 rounded-full overflow-clip cursor-pointer'>
            <img src="/W.jpg" className='w-full h-full' />
          </div>
          <div>
            <h1 className='text-lg font-bold whitespace-nowrap pr-2'>Ananya</h1>
            <p className='text-muted-text text-xs leading-2'>yashbisht0007@gmail.com</p>
          </div>
        </div>

      </div> */}

      <div className='px-80 flex gap-3'>
        {/* <h1 className='text-muted-text text-sm tracking-tight pl-4 mb-3 flex items-center gap-1'><i className="ph ph-house text-lg"></i>/ Hackathon / Hacks 2026 – Hub for Advanced Creativity, Knowledge & Solutions</h1> */}
        {/* <div className='w-70 h-screen border border-border-10 rounded-3xl bg-muted-bg p- px-'>
          <h1 className='font-bold text-3xl tracking-tighter mb-6'>MeeShee.</h1>

          <div className='flex text-blue-800 font-bold items-center justify-center gap-2 border border-border-10 rounded-full p-2 pr-3 shadow-[inset_0_0_6px_2px_rgba(37,99,235,0.3)] cursor-pointer hover:shadow-[inset_0_0_8px_3px_rgba(37,99,235,0.5)] transition-shadow ease-in-out duration-300'>
            <i className='ph ph-plus text-xl'></i>
            <h1>Create</h1>
          </div>

          <div className=''>
            {navOpts.map((item, i) => (
              <div className='flex items-center gap-2 hover:bg-white hover:border hover:border-border-10 cursor-pointer rounded-xl  p-2 px-2'>
                <i className={`ph ph-${item.icon} text-xl`}></i>
                <h1 className='text-muted-tet tracking-tight text-sm'>{item.title}</h1>
              </div>
            ))}
          </div>

          <div className='border-t p-2 border-border-10'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 border border-border-20 rounded-full overflow-clip cursor-pointer'>
                <img src="/W.jpg" className='w-full h-full' />
              </div>
              <h1 className='text-xl font-bold whitespace-nowrap pr-2 tracking-tight'>Yash Singh Bisht</h1>
            </div>
          </div>
        </div> */}

        <div className='w-64 h-full border border-border-10 rounded-3xl bg-bg p- px- justify-between flex flex-col'>
        <div className='p-4'> 
          <h1 className='font-bold text-3xl tracking-tighter mb-6'>MeeShee.</h1>

          <div className='flex text-blue-800 font-bold items-center justify-center gap-2 border border-border-10 rounded-full p-2 pr-3 shadow-[inset_0_0_6px_2px_rgba(37,99,235,0.3)] cursor-pointer hover:shadow-[inset_0_0_8px_3px_rgba(37,99,235,0.5)] transition-shadow ease-in-out duration-300'>
            <i className='ph ph-plus text-xl'></i>
            <h1>Create</h1>
          </div>

          <div className=''>
            {navOpts.map((item, i) => (
              <div className='flex items-center gap-2 hover:bg-bg hover:border hover:border-border-10 cursor-pointer rounded-xl  p-2 px-2'>
                <i className={`ph ph-${item.icon} text-xl`}></i>
                <h1 className='text-muted-tet tracking-tight text-sm'>{item.title}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-3 border-t p-2 border-border-10'>
          <div className='w-10 h-10 border border-border-20 rounded-full overflow-clip cursor-pointer'>
            <img src="/W.jpg" className='w-full h-full' />
          </div>
          <div>
            <h1 className='text-lg font-bold whitespace-nowrap pr-2'>Ananya</h1>
            <p className='text-muted-text text-xs leading-2'>yashbisht0007@gmail.com</p>
          </div>
        </div>

      </div>

        <FullPage />
        {/* <Search/> */}
      </div>

      <Footer />
    </div>
  )
}
