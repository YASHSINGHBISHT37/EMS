import React from 'react'

export default function Footer() {
    const navs = [
        { head: 'Community', navs: ['About', 'Blog', 'Privacy', 'Terms'] },
        { head: 'Connect', navs: ['Email', 'Blog', 'Privacy', 'Terms'] },
        { head: 'Support', navs: ['Contact', 'About Us', 'Privacy Policy', 'Terms of Service'] },
    ]

    const menu = ['Home', 'About', 'Contact Us', 'Privacy', 'Terms']

    return (
        <div className='w-full p-10 pb-0 flex flex-col bg-muted-bg relative z-99999999 overflow-clip'>

            <div className='flex items-end justify-between pb-20'>
                <div className='flex items-center gap-30'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-lg'>Menu</h1>

                        <div>
                            {menu.map((item, i) => (
                                <p className='text-muted-text tracking-tight text-xl leading-6'>{item}</p>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <h1 className='text-lg'>Contact</h1>

                        <div>
                            {menu.map((item, i) => (
                                <p className='text-muted-text tracking-tight text-xl leading-6'>{item}</p>
                            ))}
                        </div>

                        
                    </div>
                </div>

                <div className='flex items-center gap-3 text-muted-text text-sm tracking-tight'>
                    <p>Cookie Policy</p>
                    <p>Privacy Policy</p>
                    <p>©2026 All Copyrights Reserved by SquareOne</p>
                </div>
            </div>

            <h1 className='text-[24vh] font-bold tracking-tighter text-center leading-50'>SquareOne.</h1>

        </div>
    )
}
