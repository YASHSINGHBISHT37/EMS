import React from 'react'

export default function Search() {
    const detail = [
        // { icon: 'ph-map-pin', head: 'Location', subHead: 'TBA, Greater Noida, Uttar Pradesh, India' },
        { icon: ' ph-users-four', head: 'Team Size', subHead: '1-6 Members' },
        { icon: 'ph-broadcast', head: 'Mode', subHead: 'Online' },
    ]

    const hack = [
        { img: 'banner.webp', title: 'AgntID Hackathon Hackathon', institute: 'Institute of Innovation in Technology & Management' },
        { img: '1.avif', title: 'HACKBIOS 2K26', institute: 'Institute of Innovation in Technology & Management' },
        { img: '1.avif', title: 'HACKBIOS 2K26', institute: 'Institute of Innovation in Technology & Management' },
        { img: '1.avif', title: 'HACKBIOS 2K26', institute: 'Institute of Innovation in Technology & Management' },
        { img: '1.avif', title: 'HACKBIOS 2K26', institute: 'Institute of Innovation in Technology & Management' },
    ]

    const search = [
        { icon: 'ph-code-simple', title: 'Competitions' },
        { icon: 'ph-', title: 'Hackathons' },
        { icon: 'ph-alarm', title: 'Quizzes' },
        { icon: 'ph-desk', title: 'Workshops' },
        { icon: 'ph-microphone-stage', title: 'Conferences' },
    ]

    const tags = ['Hackathon', 'Online', 'AI']


    return (
        <div className='p-'>

            <div className='grid grid-cols-3 gap-4'>

                {hack.map((item, i) => (
                    <div className='border border-border-10 rounded-3xl w-full bg-muted-bg flex cursor-pointer relative overflow-clip flex-col h-120'>

                        {/* IMG */}
                        <div className='w-auto h-50 aspect-square relative rounded-3xl overflow-clip'>
                            <img src={`${item.img}`} className='w-full object-cover' />
                        </div>


                        <div className='flex flex-col justify-between border h-full relative px-3 pb-3'>
                            <div className=''>
                                {/* TITLE/ INSTITUTE */}
                                <div className='py-2 mb-2'>
                                    <h1 className='text-4xl font-bold tracking-tighter leading-8'>{item.title}</h1>
                                    <p className='text-muted-text text-sm mt-2 leading-3.5'>{item.institute}</p>
                                </div>

                               

                                <div className='flex flex-co gap-2 py-2'>
                                    {detail.map((item, i) => (

                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center gap-1'>
                                                <i className={`ph ${item.icon} borde flex text-lg text-muted-tex items-center justify-center rounded-md border-border-20`}></i>
                                                <p className=' leading-4 text-sm text-muted-text'>{item.subHead}</p>
                                            </div>
                                            <p className={`text-muted-text ${i === detail.length - 1 ? 'hidden' : ''}`}>|</p>
                                        </div>

                                    ))}
                                </div>

                                 {/* TAGS */}
                                 <div className='flex items-center gap-1'>
                                    {tags.map((item, i) => (
                                        <div className='rounded-full border border-border-10 p-1 px-3 bg-bg'>
                                            <h1 className='text-xs tracking-tight'>{item}</h1>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div className='w-full flex bg-muted-bg items-center justify-center h-10 rounded-full border border-border-20 font-bold flex-col'>
                                    <p>6d:4h:38m</p>
                                </div>

                                <div className='w-full cursor-pointer hover:scale-104 transition-all ease-in-out duration-300 flex items-center justify-center h-10 rounded-full border border-border-10 bg-blue-600 font-bold tracking-tigh text-bg'>
                                    <h1>Register</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}


            </div>

        </div>
    )
}
