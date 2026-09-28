import React, { useRef, useState } from 'react'

export default function FullPage() {
    const topRef = useRef(null)
    const sectionRefs = useRef({})

    const [active, setActive] = useState('Home')
    const stickyNav = ['Overview', 'Stages & Timeline', 'Details', 'Prizes', 'Review', 'FAQs & Discussions']

    const social = ['x-logo', 'instagram-logo', 'facebook-logo', 'linkedin-logo']

    const detail = [
        { icon: 'ph-map-pin', head: 'Location', subHead: 'TBA, Greater Noida, Uttar Pradesh, India' },
        { icon: ' ph-users-four', head: 'Team Size', subHead: '1-6 Members' },
        { icon: 'ph-broadcast', head: 'Mode', subHead: 'Online' },
    ]


    function goTo(key) {
        setActive(key)
        if (key === 'Home') {
            topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            sectionRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }


    const d = [
        {
            head: 'Overview',
            subHead: 'Build with AI: Code for Communities is a Google Cloud hackathon that brings together developers from across India to build AI-powered solutions for the challenges that matter most, right here at home. Healthcare supply chains. Climate resilience. Food security. Digital public infrastructure. Problems India own cities, states, and communities face every day — and need builders to help solve. This hackathon is built around one theme: solving for India. Solutions designed by Indian developers, for Indian problems, at Indian scale. The in-person Demo Day will happen in October. More details will be shared with shortlisted teams.',
        },

        {
            head: 'Stages & Timeline',
            subHead: <Timeline />,
        },

        {
            head: 'Details',
            subHead: 'ssss',
        },

        {
            head: 'Prizes',
            subHead: '',
        },

        {
            head: 'Rewards and Prizes',
            subHead: '',
        },

        {
            head: 'FAQs & Discussions',
            subHead: '',
        },
    ]
    function Timeline({ }) {
        return (
            <div className='flex flex-col gap-6 px-'>
                <div className='w-full border-border-10 rounded-2xl flex items-center gap-6 pl-8'>

                    {/* DATE */}
                    <div className='w-12 h-10 bg-bg rounded-xl overflow-clip p-0.5 flex flex-col justify-between border border-border-10'>
                        <div className='bg-blue-600 h-1/2 rounded-lg text-bg font-bold text-center text-xs'>2</div>
                        <p className='text-center text-xs'>Oct</p>
                    </div>


                    {/* DETAIL */}
                    <div className='w-full border border-border-10 rounded-3xl bg-bg p-4 flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl'>Registration</h1>
                            <p className='text-sm text-muted-text tracking-tight'>02 Jul 26, 12:00 PM</p>
                        </div>

                        <p className='text-sm text-muted-text'>This is the first step of your journey. To participate in the competition, you must register individually or in a team of 2 before the deadline. Make sure to provide all the required information accurately, adhering to the eligibility mentioned in the detailed section. </p>
                    </div>
                </div>

                <div className='w-full border-border-10 rounded-2xl flex items-center gap-6 pl-8'>

                    {/* DATE */}
                    <div className='w-12 h-10 bg-bg rounded-xl overflow-clip p-0.5 flex flex-col justify-between border border-border-10'>
                        <div className='bg-blue-600 h-1/2 rounded-lg text-bg font-bold text-center text-xs'>2</div>
                        <p className='text-center text-xs'>Oct</p>
                    </div>


                    {/* DETAIL */}
                    <div className='w-full border border-border-10 rounded-3xl bg-bg p-4 flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl'>Registration</h1>
                            <p className='text-sm text-muted-text tracking-tight'>02 Jul 26, 12:00 PM</p>
                        </div>

                        <p className='text-sm text-muted-text'>This is the first step of your journey. To participate in the competition, you must register individually or in a team of 2 before the deadline. Make sure to provide all the required information accurately, adhering to the eligibility mentioned in the detailed section. </p>
                    </div>
                </div>

                <div className='w-full border-border-10 rounded-2xl flex items-center gap-6 pl-8'>

                    {/* DATE */}
                    <div className='w-12 h-10 bg-bg rounded-xl overflow-clip p-0.5 flex flex-col justify-between border border-border-10'>
                        <div className='bg-blue-600 h-1/2 rounded-lg text-bg font-bold text-center text-xs'>2</div>
                        <p className='text-center text-xs'>Oct</p>
                    </div>


                    {/* DETAIL */}
                    <div className='w-full border border-border-10 rounded-3xl bg-bg p-4 flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl'>Registration</h1>
                            <p className='text-sm text-muted-text tracking-tight'>02 Jul 26, 12:00 PM</p>
                        </div>

                        <p className='text-sm text-muted-text'>This is the first step of your journey. To participate in the competition, you must register individually or in a team of 2 before the deadline. Make sure to provide all the required information accurately, adhering to the eligibility mentioned in the detailed section. </p>
                    </div>
                </div>
            </div>
        )
    }

    function Prizes({ }) {
        return (
            <div className='flex gap-6'>

                <div className='border border-border-10 rounded-2xl flex items-center gap-4 bg-bg p-4'>

                    <div className='w- aspect-square flex items-center justify-center border-r pr-4 border-border-20'>
                        <i className="ph ph-certificate text-6xl "></i>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-lg'>Winner Team</h1>
                        <p className='text-sm text-muted-text w-xs leading-4'>Each member of the winning team will receive a cash prize of ₹1,00,000</p>
                    </div>
                </div>

            </div>
        )
    }


    return (
        <div className='w-full px-4'>

            <div className='flex items-center w-full p-2 px-4 gap-1.5 text-muted-text'>
                <i className='ph ph-house cursor-pointer'></i> /
                <h1 className='text-xs cursor-pointer'>Create</h1> /
                <h1 className='text-xs cursor-pointer'>Create</h1> /
                <h1 className='text-xs cursor-pointer text-text'>Create</h1>
            </div>


            <div className='bg-bg rounded-3xl'>
                <div className='flex flex-col gap-3 bg-muted-bg rounded-3xl border border-border-10'>

                    {/* TOP */}
                    <div ref={topRef} className='flex flex-col gap-6 p-4 scroll-mt-10'>

                        {/* BANNER */}
                        <div className='w-full h-80 rounded-3xl overflow-clip'>
                            <img src="/banner.webp" className='w-full h-full object-cover' />
                        </div>

                        <div className='flex items- justify-between px-4'>
                            {/* IMG, TITLE AND OTHER DETAILS */}
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <img src="/W.jpg" className='w-34 h-34 rounded-2xl object-cover' />

                                    <div className='flex flex-col justify-between'>
                                        <h1 className='text-4xl font-bold tracking-tighter w-2xl leading-10'>Hacks 2026 – Hub for Advanced Creativity, Knowledge & Solutions</h1>
                                        <div className='flex gap-6'>
                                            {detail.map((item, i) => (
                                                <div className='flex items-center gap-1'>
                                                    <i className={`ph ${item.icon} borde flex p-1 text-lg items-center justify-center rounded-md border-border-20`}></i>
                                                    <p className=' leading-4 text-sm text-muted-text'>{item.subHead}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='w-60 flex flex-col justify-between px-2 gap-3 borde'>
                                <div className='flex items-center justify-end gap-4 pr-4 mb-2'>
                                    <i className='ph ph-calendar-blank text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                    <i className='ph ph-heart-straight text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                    <i className='ph ph-share-fat text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                </div>

                                <div className='text-right pr-4'>
                                    <p className='text-sm text-muted-text'>Registration Closes In</p>
                                    <h1 className='font-bold text-xl leading-6'>6d:4h:38m</h1>
                                </div>

                                <div className='flex flex-col gap-1 items-center justify-center w-full'>
                                    <h1 className='text-md leading-6 bg-blue-500 text-bg text-center rounded-2xl cursor-pointer p-2 h-10 w-full flex items-center justify-center'>Register</h1>
                                </div>
                                
                            </div>
                        </div>

                    </div>

                    {/* SECTIONS BAR */}
                    <div className='border-y border-border-10 flex items-center justify-center p-2 sticky -top-5 z-99 left-0 mt-4 backdrop-blur-xl'>
                        <div onClick={() => goTo('Home')} className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration-200 p-2 px-3 rounded-xl'>
                            <i className={`ph ph-house relative text-xl transition-colors ${active === 'Home' ? 'text-blue-600' : 'text-muted-text'}`}></i>
                            <div className={`w-full h-0.5 rounded-full bg-blue-500 absolute left-0 -bottom-2 origin-center transition-transform duration-300 ${active === 'Home' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                        {stickyNav.map((item) => {
                            const isActive = active === item
                            return (
                                <div key={item} onClick={() => goTo(item)} className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration- p-2 px-3 rounded-xl'>
                                    <h1 className={`relative cursor-pointer transition-colors text-sm ${isActive ? 'text-blue-600' : 'text-muted-text'}`}>{item}</h1>
                                    <div className={`w-full h-0.5 rounded-full bg-blue-500 absolute left-0 -bottom-3 origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                                </div>
                            )
                        })}
                    </div>

                    <div className='flex justify-between gap-2 px-4'>
                        {/* SECTION */}
                        <div className='w-full'>
                            {d.map((item, i) => (
                                <div key={i} ref={(el) => (sectionRefs.current[item.head]) = el} className={`p-4 py-8 w-full flex-col flex gap-3 scroll-mt-14  ${i === d.length - 1 ? '' : 'border-b border-border-10'}`}>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-blue-500 rounded-full w-1 h-7'></div>
                                        <h1 className='text-2xl font-bold tracking-tight'>{item.head}</h1>
                                    </div>

                                    <div className='text-sm pl-6 text-'>{item.subHead}</div>
                                </div>
                            ))}
                        </div>

                        {/* POP-UP */}
                        <div className='relatives w-80'>
                            <div className='border border-border-10 rounded-3xl p-4 mt-10 w-80 sticky top-30 left-0 flex flex-col gap-4 bg-bg'>
                                <div className='flex gap-1'>
                                    {social.map((icon, i) => (
                                        <i key={i} className={`ph ph-${icon} border border-border-20 rounded-full p-4 w-7 h-7 bg-bg flex items-center justify-center text-2xl`}></i>
                                    ))}
                                </div>

                                <h1 className='font-bold text-2xl tracking-tight leading-6'>Hacks 2026 – Hub for Advanced Creativity, Knowledge & Solutions</h1>

                                <div>
                                    <p className='text-sm text-muted-text'>Registration Closes In</p>
                                    <h1 className='font-bold text-xl leading-6'>6d:4h:38m</h1>
                                </div>


                                <div className='flex flex-col gap-2 items-center justify-center w-full'>
                                    <h1 className='text-xl font-semibold leading-6 bg-blue-500 text-bg text-center rounded-full p-2 h-10 w-full'>Register</h1>
                                    <p className='text-sm text-muted-text tracking-tight'>404 Registered</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}