import React from 'react'

export default function Footer() {
    const navs = [
        { head: 'Community', navs: ['About', 'Blog', 'Privacy', 'Terms'] },
        { head: 'Connect', navs: ['Email', 'Blog', 'Privacy', 'Terms'] },
        { head: 'Support', navs: ['Contact', 'About Us', 'Privacy Policy', 'Terms of Service'] },
    ]
    return (
        <div className='w-full pt-4 px-90 flex flex-col gap-4 justify-end bg-bg relative z-99999999 mt-20'>

            <div className='flex justify-between  mb-8'>
                <h1 className='text-6xl font-bold tracking-tighter'>MeeShee.</h1>

                <div className='flex gap-12'>
                    {navs.map((items, i) => (
                        <div>
                            <h1 className=' mb-2 tracking-tight text-muted-text'>{items.head}</h1>

                            <div>
                                {items.navs.map((item, i) => (
                                    <h1 className='tracking-tight text-lg leading- cursor-pointer'>{item}</h1>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='h-10 p-2 border-t border-border-20 flex items-center justify-between'>
                <h1>© 2026 myResult All rights reserved.</h1>
                <h1 className='text-sm tracking-tight'>© 2026 myResult All rights reserved.</h1>
            </div>
        </div>
    )
}
