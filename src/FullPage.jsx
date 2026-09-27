import React from 'react'

export default function FullPage() {
    const social = ['x-logo', 'instagram-logo', 'facebook-logo', 'linkedin-logo']
    const stickyNav = ['Overview', 'Stages & Timeline', 'Details', 'Prizes', 'Review', 'FAQs & Discussions']

    const detail = [
        { icon: 'ph-map-pin', head: 'Location', subHead: 'TBA, Greater Noida, Uttar Pradesh, India' },
        { icon: ' ph-users-four', head: 'Team Size', subHead: '1-6 Members' },
        { icon: 'ph-broadcast', head: 'Mode', subHead: 'Online' },
    ]

    const d = [
        {
            head: 'Overview',
            subHead: 'Build with AI: Code for Communities is a Google Cloud hackathon that brings together developers from across India to build AI-powered solutions for the challenges that matter most, right here at home. Healthcare supply chains. Climate resilience. Food security. Digital public infrastructure. Problems India own cities, states, and communities face every day — and need builders to help solve. This hackathon is built around one theme: solving for India. Solutions designed by Indian developers, for Indian problems, at Indian scale. The in-person Demo Day will happen in October. More details will be shared with shortlisted teams.',
        },

        {
            head: 'Stages & Timeline',
            subHead: '',
        },

        {
            head: 'Details',
            subHead: '',
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
            <div className='flex flex-col gap-6 px-10'>

                <div className='flex gap-6 items-center'>
                    <div className='w-11 rounded-lg flex flex-col h-9 p-0.5 bg-bg relative z-999 items-center'>
                        <div className='w-full bg-blue-600 rounded-md text-white font-bold text-center text-xs '>2</div>
                        <p className='text-center text-xs relative'>Oct</p>
                    </div>

                    <div className='w-3xl border border-border-10 p-4 rounded-2xl gap-2 flex flex-col bg-bg'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-lg'>Registration</h1>
                            <p className='text-sm text-muted-text tracking-tight'>02 Jul 26, 12:00 PM</p>
                        </div>
                        <p className='text-sm text-muted-text'>This is the first step of your journey. To participate in the competition, you must register individually or in a team of 2 before the deadline. Make sure to provide all the required information accurately, adhering to the eligibility mentioned in the detailed section. </p>
                    </div>
                </div>

                <div className='flex gap-6 items-center'>
                    <div className='w-11 rounded-lg flex flex-col h-9 p-0.5 bg-bg relative z-999 items-center'>
                        <div className='w-full bg-blue-600 rounded-md text-white font-bold text-center text-xs '>2</div>
                        <p className='text-center text-xs relative'>Oct</p>
                        {/* <div className='absolute w-0.5 h-50 bg-blue-600 top-1/2 left-1/2 z-2 rounded-full'></div> */}
                    </div>

                    <div className='w-3xl border border-border-10 p-4 rounded-2xl gap-2 flex flex-col bg-bg'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-lg'>Registration</h1>
                            <p className='text-sm text-muted-text tracking-tight'>02 Jul 26, 12:00 PM</p>
                        </div>
                        <p className='text-sm text-muted-text'>This is the first step of your journey. To participate in the competition, you must register individually or in a team of 2 before the deadline. Make sure to provide all the required information accurately, adhering to the eligibility mentioned in the detailed section. </p>
                    </div>
                </div>

                <div className='flex gap-6 items-center'>
                    <div className='w-11 rounded-lg flex flex-col h-9 p-0.5 bg-bg relative z-999 items-center'>
                        <div className='w-full bg-blue-600 rounded-md text-white font-bold text-center text-xs '>2</div>
                        <p className='text-center text-xs relative'>Oct</p>
                        {/* <div className='absolute w-0.5 h-50 bg-blue-600 top-1/2 left-1/2 z-2 rounded-full'></div> */}
                    </div>

                    <div className='w-3xl border border-border-10 p-4 rounded-2xl gap-2 flex flex-col bg-bg'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-lg'>Registration</h1>
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

                <div className='border border-border-10 rounded-2xl flex items-center gap-4 bg-bg p-4'>

                    <div className='w- aspect-square flex items-center justify-center'>
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
        <div className='w-full h-full flex justify-between flex-col gap-4 p-4 rounded-4xl overflow-y-hidden bg-muted-bg border border-border-10'>


            <div className='border border-border-10 flex flex-col gap-6 w-full bg-white rounded-4xl p-4'>
                <div className='w-full h-90 rounded-3xl overflow-clip'>
                    <img src="/banner.webp" className='w-full h-full object-cover' />
                </div>

                <div className='flex justify-between px-4'>
                    <div className='flex gap-4'>
                        <img src="/banner.webp" className='w-30 h-30 rounded-xl object-cover' />
                        <h1 className='text-4xl font-bold tracking-tighter w-2xl leading-10'>Hacks 2026 – Hub for Advanced Creativity, Knowledge & Solutions</h1>
                    </div>

                    <div className='flex flex-col gap-2'>
                        {detail.map((item, i) => (
                            <div className='flex gap-3 borde'>
                                <i className={`ph ${item.icon} borde flex w-10 h-10 p-1 text-xl text-muted-tex items-center justify-center rounded-md border-border-20`}></i>
                                <div>
                                    <h1 className='text-sm text-muted-text'>{item.head}</h1>
                                    <p className=' leading-4 text-sm'>{item.subHead}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col gap-6'>
                <div className='w-full h-90 rounded-3xl overflow-clip'>
                    <img src="/banner.webp" className='w-full h-full object-cover' />
                </div>

                <div className='flex justify-between px-4'>
                    <div className='flex gap-4'>
                        <img src="/banner.webp" className='w-30 h-30 rounded-xl object-cover' />
                        <h1 className='text-4xl font-bold tracking-tighter w-2xl leading-10'>Hacks 2026 – Hub for Advanced Creativity, Knowledge & Solutions</h1>
                    </div>

                    <div className='flex flex-col gap-2'>
                        {detail.map((item, i) => (
                            <div className='flex gap-3 borde'>
                                <i className={`ph ${item.icon} borde flex w-10 h-10 p-1 text-xl text-muted-tex items-center justify-center rounded-md border-border-20`}></i>
                                <div>
                                    <h1 className='text-sm text-muted-text'>{item.head}</h1>
                                    <p className=' leading-4 text-sm'>{item.subHead}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className='border-y border-border-20 flex items-center gap-4 justify-center p-3 sticky top-0 z-10'>
                    {stickyNav.map((item) => (
                        <h1 key={item.label ?? item} className='cursor-pointer text-muted-text hover:text-text transition-colors'>
                            {item.label ?? item}
                        </h1>
                    ))}
                </div>
            </div>

            <div className='flex gap-8'>

                <div className='flex-1'>
                    {d.map((item, i) => (
                        <div className={`p-4 py-8 flex-col flex gap-3  ${i === d.length - 1 ? '' : 'border-b border-border-20'}`}>
                            <div className='flex items-center gap-4'>
                                <div className='bg-blue-500 rounded-full w-1 h-7'></div>
                                <h1 className='text-2xl font-bold tracking-tight'>{item.head}</h1>
                            </div>

                            <p className='text-sm text-muted-text'></p>
                            <Timeline />
                            {/* <Prizes /> */}
                        </div>
                    ))}



                </div>

                <div className='flex flex-col gap-3'>
                    <div className='border border-border-10 rounded-3xl p-4 w-80 flex flex-col gap-4 bg-muted-bg fixed bottom-4 right-5 z-99'>
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
    )
}
