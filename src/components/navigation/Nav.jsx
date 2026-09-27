import React from 'react'

export default function Nav() {
    const navOpt = ['Home', 'Hackathons', 'Blog']



    return (
        <div className='w-full backdrop-blur-xl border border-border-10 items-center flex justify-between p-3 fixed top-0 left-0 px-94'>
            <h1 className='font-bold text-3xl tracking-tighter'>MeeShee.</h1>

            <div className='flex gap-4'>
                {navOpt.map((item, i) => (
                    <h1 className='text-muted-text tracking-tight cursor-pointer'>{item}</h1>
                ))}
            </div>

            <div className='flex items-center gap-3 relative'>
                <div className='w-8 h-8 border border-border-20 rounded-full overflow-clip cursor-pointer'>
                    <img src="/W.jpg" className='w-full h-full' />
                </div>
                <div className='w-auto border border-border-10 rounded-3xl absolute top-10 left-1/2 -translate-x-1/2 bg-bg p-4'>

                    <div className='px-'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 border border-border-20 rounded-full overflow-clip cursor-pointer'>
                                <img src="/W.jpg" className='w-full h-full' />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold whitespace-nowrap pr-2'>Yash Singh Bisht</h1>
                                <p className='text-muted-text text-xs leading-3'>yashbisht0007@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between gap-2 py-3'>
                            <div className='flex w-full items-center gap-2 rounded-xl bg-muted-bg cursor-pointer justify-center border border-border-10 py-2'>
                                <i className="ph ph-pencil-simple text-md"></i>
                                <p className=' tracking-tight text-sm'>Edit Profile</p>
                            </div>

                            <div className='flex w-full items-center gap-2 rounded-xl bg-muted-bg cursor-pointer justify-center border border-border-10 py-2'>
                                <i className="ph ph-pencil-simple text-md"></i>
                                <p className=' tracking-tight text-sm'>Edit Profile</p>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col gap-3 text-lg py-3 border-t border-border-10 px-2'>
                        <div className='flex items-center gap-2'>
                            <i className="ph ph-code-simple text-md"></i>
                            <p className=' tracking-tight text-sm'>Hackathon</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <i className="ph ph-qr-code text-lg"></i>
                            <p className=' tracking-tight text-sm'>Show QR</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <i className="ph ph-gear text-md"></i>
                            <p className=' tracking-tight text-sm'>Account Settings</p>
                        </div>

                    </div>

                    <div className='flex items-center gap-2 text-red-600 border-t border-border-10 pt-2 px-2'>
                        <i className="ph ph-sign-out scale-x-[-1] text-md"></i>
                        <p className=' tracking-tight text-sm'>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
