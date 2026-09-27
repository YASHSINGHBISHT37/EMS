import React from 'react'

export default function Nav() {
    const navOpt = ['Home', 'Hackathons', 'Blog']

    return (
        <div className='w-full px-90 fixed left-0 top-2'>
            <div className='w-full pl-5 backdrop-blur-xl border border-border-10 items-center flex justify-between p-2 bg-muted-bg rounded-3xl'>

                <h1 className='font-bold text-3xl tracking-tighter'>EventHive</h1>

                <div className='flex items-center gap-3'>
                    <div className='flex gap-3'>
                        {navOpt.map((item, i) => (
                            <h1 className='text-muted-text tracking-tight cursor-pointer'>{item}</h1>
                        ))}
                    </div>

                    <div className='w-10 h-10 border border-border-20 rounded-full bg-black'></div>
                </div>
            </div>
        </div>
    )
}
