import React from 'react'

export default function Search() {
    const detail = [
        // { icon: 'ph-map-pin', head: 'Location', subHead: 'TBA, Greater Noida, Uttar Pradesh, India' },
        { icon: ' ph-users-four', head: 'Team Size', subHead: '1-6 Members' },
        { icon: 'ph-broadcast', head: 'Mode', subHead: 'Online' },
    ]

    const hack = [
        { title: 'HACKBIOS 2K26', institute: 'Institute of Innovation in Technology & Management' },
        { title: 'National Student Cloud & AI Innovation Challenge – Season 3', institute: 'Jawaharlal Nehru Technological University (JNTUH), Hyderabad' },
        { title: 'Ai builder cup 2026', institute: 'Sanjay Ghodawat University, Kolhapur, Maharashtra' },
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


                {/* SEARCH BAR */}
                <div className='flex items-end justify-end mb-4'>
                    <div className='w-sm border border-border-10 rounded-full bg-muted-bg p-2.5 px-3 flex items-center gap-2'>
                        <i className="ph ph-magnifying-glass text-xl"></i>
                        <input type="text" placeholder='Search Hackathon, Events, Compititions...' className='text-sm w-full outline-0' />
                        <i className="ph ph-x text-xl text-muted-text"></i>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>

                    {hack.map((item, i) => (
                        <div className='border border-border-10 rounded-2xl p-3 w-full h-60 bg-muted-bg flex gap-4'>

                            <div className='w-30 aspect-square relative'>
                                <img src="W.jpg" className='w-full rounded-xl -top-10 object-cover' />
                            </div>


                            <div className='flex flex-col'>
                                <div className='py-1'>
                                    <h1 className='text-3xl font-bold tracking-tight leading-8'>{item.title}</h1>
                                    <p className='text-muted-text text-sm'>{item.institute}</p>
                                </div>

                                <div className='flex flex-co gap-2 py-2'>
                                    {detail.map((item, i) => (

                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center gap-1'>
                                                <i className={`ph ${item.icon} borde flex text-md text-muted-tex items-center justify-center rounded-md border-border-20`}></i>
                                                <p className=' leading-4 text-xs text-muted-text'>{item.subHead}</p>
                                            </div>
                                            <p className={`text-muted-text ${i === detail.length - 1 ? 'hidden' : ''}`}>|</p>
                                        </div>

                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}


                </div>

            </div>
        </div>
    )
}
