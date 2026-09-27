import React from 'react'

export default function SideBar() {
    const navOpts = [
        { icon: 'house', title: 'Home' },
        { icon: 'code-simple', title: 'Hackathons' },
        { icon: '', title: 'Home' },
        { icon: '', title: 'Home' },
        { icon: '', title: 'Home' }
    ]
    return (
        <div>
            {navOpts.map((item, i) => (
                <div className=''>
                    <i className={`ph ph-${item.icon}`}></i>
                </div>
            ))}
        </div>
    )
}
