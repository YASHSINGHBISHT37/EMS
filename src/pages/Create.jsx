import React, { useState } from 'react'

export default function Create() {
    const [active, setActive] = useState('Overview')
    const tabs = ['Basics', 'Stages & Timeline', 'Details', 'Prizes', 'Review', 'FAQs & Discussions']

    return (
        <div className='w-full min-h-screen border border-border-10 rounded-3xl bg-muted-bg h-full relative overflow-clip'>

            {/* SECTIONS BAR */}
            <div className='border-b border-border-10 flex items-center justify-center p-2 px-4 sticky w-full top-0 z-99 left-0 backdrop-blur-xl'>
                {/* <div className='text-sm rounded-full p-1 px-4 border border-border-10 bg-muted-bg flex items-center gap-1.5'>
                    <i className='ph ph-arrow-left'></i>
                    <h1>Back</h1>
                </div> */}
                <div className='flex items-center'>
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
                {/* <div className='text-sm rounded-full bg-blue-500 text-bg p-1 px-4 border border-border-10 flex gap-1.5 items-center'>
                    <h1>Next</h1>
                    <i className='ph ph-arrow-right'></i>
                </div> */}
            </div>

            <div className='mt-2 px-4 flex items-center justify-end gap-2'>
                <div className='text-sm rounded-full p-1 px-4 border border-border-10 bg-muted-bg flex items-center gap-1.5'>
                    <i className='ph ph-arrow-left'></i>
                    <h1>Back</h1>
                </div>
                <div className='text-sm rounded-full bg-blue-500 text-bg p-1 px-4 border border-border-10 flex gap-1.5 items-center'>
                    <h1>Next</h1>
                    <i className='ph ph-arrow-right'></i>
                </div>
            </div>

            {/* FORM */}
            <div className='w-full relative flex flex-col gap-4 p-4'>
                {/* <div className='w-full h-60  overflow-clip'>
                    <img src="W.jpg" className='w-full' />
                </div>
                <div className='w-26 aspect-square border border-border-10 p-1 rounded-2xl bg-bg absolute z-999 -bottom-10 left-4 overflow-clip'>
                    <img src="W.jpg" className='w-full object-cover rounded-xl' />
                </div> */}

                <div className='h-80 rounded-3xl border border-border-10 overflow-clip'>
                    <img src="W.jpg" className='w-full h-full object-cover' />
                </div>

                <div className='flex items-center justify-between w-full gap-4'>

                    <div className='w-full flex flex-col gap-1'>
                        <h1 className='text-sm px-2'>Opportunity Title <span className='text-red-700'>*</span></h1>
                        <input className='w-full bg-b outline-blue-600 outline-1.5 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-4' type="text" placeholder='Please enter the name of your hackathon.' />
                        <p className='text-xs text-muted-text px-2'>Max 200 characters</p>
                    </div>


                    <div className='w-full flex flex-col gap-1'>
                        <h1 className='text-sm px-2'>Organisation Name <span className='text-red-700'>*</span></h1>
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
