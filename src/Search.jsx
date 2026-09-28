import React from 'react'

export default function Search() {
    const detail = [
        { icon: 'ph-map-pin', head: 'Location', subHead: 'TBA, Greater Noida, Uttar Pradesh, India' },
        { icon: ' ph-users-four', head: 'Team Size', subHead: '1-6 Members' },
        { icon: 'ph-broadcast', head: 'Mode', subHead: 'Online' },
    ]

    const hack = [
        { title: 'HACKBIOS 2K26', institute: 'Institute of Innovation in Technology & Management' },
        { title: 'National Student Cloud & AI Innovation Challenge – Season 3', institute: 'Jawaharlal Nehru Technological University (JNTUH), Hyderabad' },
    ]

    const search = [
        { icon: 'ph-code-simple', title: 'Competitions' },
        { icon: 'ph-', title: 'Hackathons' },
        { icon: 'ph-alarm', title: 'Quizzes' },
        { icon: 'ph-desk', title: 'Workshops' },
        { icon: 'ph-microphone-stage', title: 'Conferences' },
    ]

    return (
        <div className='p-'>
            <div className='flex items-center w-full p-2 px-4 gap-1.5 text-muted-text'>
                <i className='ph ph-house cursor-pointer'></i> /
                <h1 className='text-xs cursor-pointer'>Create</h1> /
                <h1 className='text-xs cursor-pointer'>Create</h1> /
                <h1 className='text-xs cursor-pointer text-text'>Create</h1>
            </div>

            <div className='bg-muted-bg rounded-3xl p-4 border border-border-10'>
                <div className='flex items-center gap-2'>
                    {search.map((item, i) => (
                        <div className='flex items-center gap-2 border border-border-10 px-4 rounded-full bg-muted-bg p-2 cursor-pointer'>
                            <i className={`ph ${item.icon} text-lg`}></i>
                            <h1 className='text-sm tracking-tight'>{item.title}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex items-end justify-end mb-4'>
                    <div className='w-sm border border-border-10 rounded-full bg-muted-bg p-2.5 px-3 flex items-center gap-2'>
                        <i className="ph ph-magnifying-glass text-xl"></i>
                        <input type="text" placeholder='Search Hackathon, Events, Compititions...' className='text-sm w-full outline-0' />
                        <i className="ph ph-x text-xl text-muted-text"></i>
                    </div>

                    <div>

                    </div>
                </div>

                <div className='flex gap-4 w-full my-4'>
                    <div className='border border-border-10 rounded-2xl p-2 w-full'>
                        <div className='flex gap-4'>
                            <div className='w-30 aspect-square relative'>
                                <img src="W.jpg" className='w-full rounded-xl absolute -top-10 object-cover' />
                            </div>
                            <div className='py-1'>
                                <h1 className='text-3xl font-bold tracking-tighter leading-8'>Ai builder cup 2026</h1>
                            </div>
                        </div>
                    </div>

                    <div className='border border-border-10 rounded-2xl p-2 w-full'>
                        <div className='flex gap-4'>
                            <div className='w-30 aspect-square relative'>
                                <img src="W.jpg" className='w-full rounded-xl absolute -top-10 object-cover' />
                            </div>
                            <div className='py-1'>
                                <h1 className='text-3xl font-bold tracking-tighter leading-8'>Ai builder cup 2026</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 w-full my-4'>
                    <div className='border border-border-10 rounded-3xl overflow-clip w-full'>
                        <div className='flex gap-4'>
                            <div className='w-50 aspect-square relative'>
                                <img src="W.jpg" className='w-full rounded-x object-cover' />
                            </div>
                            <div className='py-1'>
                                <h1 className='text-3xl font-bold tracking-tighter leading-8'>Ai builder cup 2026</h1>
                            </div>
                        </div>
                    </div>

                    <div className='border border-border-10 rounded-3xl overflow-clip w-full'>
                        <div className='flex gap-4'>
                            <div className='w-50 aspect-square relative'>
                                <img src="W.jpg" className='w-full rounded-x object-cover' />
                            </div>
                            <div className='py-1'>
                                <h1 className='text-3xl font-bold tracking-tighter leading-8'>Ai builder cup 2026</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>


                    {hack.map((item, i) => (
                        <div className='border border-border-10 rounded-2xl p-4 bg-muted-bg w-full cursor-pointer hover:border-blue-600 hover:scale-102 transition-all ease-in-out duration-300'>
                            <div className='flex gap-4 items-center w-full'>
                                <img src="/banner.webp" className='w-14 h-14 rounded-lg object-cover' />
                                <div className='flex flex-col justify-between gap-2'>
                                    <h1 className='text-3xl font-bold tracking-tighter leading-8'>{item.title}</h1>
                                    <p className='text-muted-text text-sm'>{item.institute}</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 py-2'>
                                {detail.map((item, i) => (

                                    <div className='flex items-center'>
                                        <i className={`ph ${item.icon} borde flex text-md text-muted-tex items-center justify-center rounded-md border-border-20`}></i>
                                        <p className=' leading-4 text-sm'>{item.subHead}</p>
                                    </div>

                                ))}
                            </div>

                            <div className='flex flex-col gap-2 items-center justify-center w-full'>
                                <h1 className='text-xl font-semibold leading-6 bg-blue-500 text-bg text-center rounded-full p-2 h-10 w-full'>Register</h1>
                            </div>

                            <div>
                                <div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
