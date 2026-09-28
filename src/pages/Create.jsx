import React, { useState } from 'react'

export default function Create() {
    const [active, setActive] = useState('Overview')
    const tabs = ['Basics', 'Stages & Timeline', 'Details', 'Prizes', 'Review', 'FAQs & Discussions']

    return (
        <div className='w-full min-h-screen border border-border-10 rounded-3xl bg-muted-bg h-full relative overflow-clip'>

            {/* SECTIONS BAR */}
            <div className='border-b border-border-10 flex items-center justify-center p-2 sticky w-full top-0 z-99 left-0 backdrop-blur-xl'>
                {tabs.map((item) => {
                    const isActive = active === item
                    return (
                        <div key={item} onClick={() => setActive(item)} className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration- p-2 px-3 rounded-xl'>
                            <h1 className={`relative cursor-pointer transition-colors text-sm ${isActive ? 'text-blue-600' : 'text-muted-text'}`}>{item}</h1>
                            <div className={`w-full h-0.5 rounded-full bg-blue-500 absolute left-0 -bottom-2 origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                    )
                })}
            </div>

            {/* FORM */}
            <div className='w-full relative flex flex-col gap-4 p-4'>
                {/* <div className='w-full h-60  overflow-clip'>
                    <img src="W.jpg" className='w-full' />
                </div>
                <div className='w-26 aspect-square border border-border-10 p-1 rounded-2xl bg-bg absolute z-999 -bottom-10 left-4 overflow-clip'>
                    <img src="W.jpg" className='w-full object-cover rounded-xl' />
                </div> */}

                <div className='h-60 rounded-3xl border border-border-10'>
                </div>

                <div className='flex items-center justify-between w-full gap-4'>

                    <div className='w-full flex flex-col gap-1'>
                        <h1 className='text-sm px-2'>Title <span className='text-red-700'>*</span></h1>
                        <input className='w-full bg-b outline-blue-600 outline-1.5 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-4' type="text" placeholder='Please enter the name of your hackathon.' />
                        <p className='text-xs text-muted-text px-2'>Max 200 characters</p>
                    </div>


                    <div className='w-full flex flex-col gap-1'>
                        <h1 className='text-sm px-2'>Tagline <span className='text-red-700'>*</span></h1>
                        <input className='w-full bg-b outline-blue-600 outline-1.5 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-4' type="text" placeholder='Please enter the name of your hackathon.' />
                        <p className='text-xs text-muted-text px-2'>Max 200 characters</p>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-1'>
                    <h1 className='text-sm px-2'>About <span className='text-red-700'>*</span></h1>
                    <input className='w-full bg-b outline-blue-600 outline-1.5 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-4' type="text" placeholder='Please enter the name of your hackathon.' />
                    <p className='text-xs text-muted-text px-2'>Max 200 characters</p>
                </div>
            </div>

        </div>
    )
}
