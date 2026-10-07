import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_OPTS = [
    { label: 'Home', to: '/' },
    { label: 'Create', to: '/create' },
    { label: 'Search', to: '/search' },
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Blog', to: '/blog' },
]

export default function Nav() {
    const location = useLocation()
    const [profileOpen, setProfileOpen] = useState(false)

    return (
        <div className='w-full fixed top-0 left-0 z-999999 flex flex-col items-center justify-center bg-[#F7F8F9] backdrop-blur-xs borde border-border-10'>

            <div className='w-7xl items-center flex justify-between p-3 relative z-10'>

                <h1 className='font-bold text-3xl tracking-tighter'>SquareOne.</h1>

                    <div className='flex gap-3  '>
                        {NAV_OPTS.map((item) => {
                            const isActive = location.pathname === item.to
                            return (
                                <Link key={item.label} to={item.to} className={`text-sm cursor-pointer transition-colors ${isActive ? 'text-accent font-medium' : 'text-muted-text hover:text-text'}`}>
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>

                    <div className='flex items-center gap-4 relative'>
                        <i className='ph ph-bell text-xl cursor-pointer'></i>

                        <div className='w-10 h-10 border border-border-20 rounded-full overflow-clip cursor-pointer' onClick={() => setProfileOpen((prev) => !prev)}>
                            <img src="/W.jpg" className='w-full h-full' />
                        </div>

                        {profileOpen && (
                            <>
                                {/* click-outside catcher */}
                                <div className='fixed inset-0 z-40' onClick={() => setProfileOpen(false)}></div>

                                <div className='w-auto border border-border-10 rounded-3xl absolute top-12 right-0 bg-bg p-4 z-50'>

                                    <div>
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
                                                <p className='tracking-tight text-sm'>Edit Profile</p>
                                            </div>

                                            <div className='flex w-full items-center gap-2 rounded-xl bg-muted-bg cursor-pointer justify-center border border-border-10 py-2'>
                                                <i className="ph ph-share-network text-md"></i>
                                                <p className='tracking-tight text-sm'>Share Profile</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-3 text-lg py-3 border-t border-border-10 px-2'>
                                        <Link to='/hackathons' className='flex items-center gap-2' onClick={() => setProfileOpen(false)}>
                                            <i className="ph ph-code-simple text-md"></i>
                                            <p className='tracking-tight text-sm'>Hackathon</p>
                                        </Link>

                                        <div className='flex items-center gap-2 cursor-pointer'>
                                            <i className="ph ph-qr-code text-lg"></i>
                                            <p className='tracking-tight text-sm'>Show QR</p>
                                        </div>

                                        <Link to='/settings' className='flex items-center gap-2' onClick={() => setProfileOpen(false)}>
                                            <i className="ph ph-gear text-md"></i>
                                            <p className='tracking-tight text-sm'>Account Settings</p>
                                        </Link>
                                    </div>

                                    <div className='flex items-center gap-2 text-red-600 border-t border-border-10 pt-2 px-2 cursor-pointer'>
                                        <i className="ph ph-sign-out scale-x-[-1] text-md"></i>
                                        <p className='tracking-tight text-sm'>Logout</p>
                                    </div>

                                </div>
                            </>
                        )}
                    </div>

            </div>

        </div>
    )
}