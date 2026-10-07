import React, { useRef, useState } from 'react'

export default function FullPage() {
    const topRef = useRef(null)
    const sectionRefs = useRef({})

    const [active, setActive] = useState('Home')
    const stickyNav = ['Overview', 'Rounds', 'Details', 'Prizes', 'FAQs']

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
            subHead: <Overview />,
        },

        {
            head: 'Rounds',
            subHead: <Rounds />,
        },

        {
            head: 'Details',
            subHead: 'ssss',
        },
        {
            head: 'Eligibility',
            subHead: 'ssss',
        },

        {
            head: 'Rewards and Prizes',
            subHead: <Prizes />,
        },

        {
            head: 'FAQs',
            subHead: <FAQS />,
        },
    ]
    function Rounds({ }) {
        return (
            <div className='flex flex-col gap-6 px-'>
                <div className='w-full flex items-center gap-6 pl-8'>

                    {/* DATE */}
                    <div className='w-10 h-9 bg-bg rounded-lg overflow-clip p- flex flex-col justify-between border border-black/20'>
                        <div className='bg-blue-600 h-1/2 rounded-lg-t text-bg font-bold text-center text-xs flex items-center  justify-center'>2</div>
                        <p className='text-center text-xs'>Oct</p>
                    </div>


                    {/* DETAIL */}
                    <div className='w-full border border-border-10 rounded-2xl bg-bg p-3 px-4 flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl'>Registration</h1>
                            <p className='text-sm text-muted-text tracking-tight'>02 Jul 26, 12:00 PM</p>
                        </div>

                        <p className='text-sm text-muted-text'>This is the first step of your journey. To participate in the competition, you must register individually or in a team of 2 before the deadline. Make sure to provide all the required information accurately, adhering to the eligibility mentioned in the detailed section. </p>
                    </div>
                </div>

                <div className='w-full border-border-10 rounded-2xl flex items-center gap-6 pl-8'>

                    {/* DATE */}
                    <div className='w-10 h-9 bg-bg rounded-lg overflow-clip p- flex flex-col justify-between border border-black/20'>
                        <div className='bg-blue-600 h-1/2 rounded-lg-t text-bg font-bold text-center text-xs flex items-center  justify-center'>2</div>
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
                    <div className='w-10 h-9 bg-bg rounded-lg overflow-clip p- flex flex-col justify-between border border-black/20'>
                        <div className='bg-blue-600 h-1/2 rounded-lg-t text-bg font-bold text-center text-xs flex items-center  justify-center'>2</div>
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

    const t = [
        { title: 'Runs From', sub: 'Sep 25-26, 2026' },
        { title: 'Location', sub: 'New Delhi, Delhi' },
        { title: 'Registration Closed In', sub: '6d:4h:38m' }
    ]

    const FAQs = [
        {
            question: "What is this platform about?",
            answer: "This platform provides simple and useful tools to help users manage their work efficiently."
        },
        {
            question: "How do I create an account?",
            answer: "Click on the Sign Up button, enter your details, and follow the instructions to create your account. Click on the Sign Up button, enter your details, and follow the instructions to create your account. Click on the Sign Up button, enter your details, and follow the instructions to create your account."
        },
        {
            question: "Is the platform free to use?",
            answer: "Yes, you can use the basic features for free."
        },
        {
            question: "Can I access it on mobile devices?",
            answer: "Yes, the platform is designed to work smoothly on mobile phones, tablets, and desktops."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact our support team through the Contact Us section or available support channels."
        },
        {
            question: "Is my information secure?",
            answer: "Yes, we take reasonable security measures to protect your information and keep your data safe."
        }
    ]

    function FAQS() {
        const [openFAQ, setOpenFAQ] = useState(null)

        const handleClick = (i) => {
            setOpenFAQ(openFAQ === i ? null : i)
        }

        return (
            <div className='flex flex-col px-4'>
                {FAQs.map((item, i) => (
                    <div key={i} onClick={() => handleClick(i)} className={`flex flex-col py-3 cursor-pointer ${i === FAQs.length - 1 ? '' : 'border-b border-border-10'}`}>
                        {/* Question */}
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[1.8vh]'>{item.question}</h1>
                            <i className={`ph text- transition-transform duration-300 ease-in-out ${openFAQ === i ? 'ph-minus rotate-180' : 'ph-plus rotate-0'}`}></i>
                        </div>

                        {/* Answer */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${openFAQ === i ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                            <div className='overflow-hidden'>
                                <p className='text-sm text-muted-text leading-5 max-w-2xl'>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    function Overview({ }) {
        return (
            <div>
                <p className='text-muted-text'>Build with AI: Code for Communities is a Google Cloud hackathon that brings together developers from across India to build AI-powered solutions for the challenges that matter most, right here at home. Healthcare supply chains. Climate resilience. Food security. Digital public infrastructure. Problems India own cities, states, and communities face every day — and need builders to help solve. This hackathon is built around one theme: solving for India. Solutions designed by Indian developers, for Indian problems, at Indian scale. The in-person Demo Day will happen in October. More details will be shared with shortlisted teams.</p>
            </div>
        )
    }

    function Prizes() {
        return (
            <div className='grid grid-cols-2 gap-4 px-4'>
                <div className='w-full border border-border-10 p-4 px-2 rounded-2xl flex items-center gap-3'>

                    <div className='w-30 h-30 flex items-center justify-center'>
                        <i className="ph ph-money-wavy text-8xl"></i>
                    </div>

                    <div className='h-full border-l border-border-10 w-1'></div>

                    <div className='h-full flex-1 flex-col justify-between flex py-1'>
                        <div className='fle'>
                            <p className='text-xs text-muted-text'>CASH</p>
                            <h1 className='text-2xl tracking-tighter'>$20,000</h1>
                        </div>
                        <div>
                            <h1 className=' tracking-tight font-bold text-lg'>1st</h1>
                            <p className='text-muted-text tracking-tight text-sm leading-3'>Prize in kind</p>
                        </div>
                    </div>
                </div>

                <div className='w-full border border-border-10 p-2 rounded-2xl flex items-center gap-3'>
                    <div className='w-30 h-30 flex items-center justify-center'>
                        <i className="ph ph-certificate text-8xl"></i>
                    </div>

                    <div className='h-full border-l border-border-10 w-1'></div>

                    <div className='h-full flex-1 flex flex-col justify-center'>
                        <h1 className=' tracking-tight font-bold text-lg'>Participants</h1>
                        <p className='text-muted-text tracking-tight text-sm'>Prize in kind</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-3 bg-muted-b rounded-3xl border border-border-10 w-'>

                {/* TOP */}
                <div ref={topRef} className='flex flex-col justify-center items-center gap-6 p- scroll-mt-40'>

                    {/* BANNER */}
                    <div className='w-6xl h-100 rounded-3xl overflow-clip'>
                        <img src="/banner.webp" className='w-full h-full object-cover' />
                    </div>

                    {/* IMG, TITLE AND OTHER DETAILS */}
                    <div className='flex items-center justify-center gap-4 w-6xl px-6'>
                        <img src="/W.jpg" className='w-34 h-34 rounded-2xl object-cover border border-border-10' />

                        <div className='flex flex-col gap-3 w-full'>

                            <div className='w-full borde flex justify-between items-center'>
                                {/* TAGS */}
                                <div className='flex items-center gap-2 text-bg'>
                                    <div className='rounded-full border border-border-10 p-0.5 px-3 bg-accent'>
                                        <h1 className='text-xs'>Hackathon</h1>
                                    </div>

                                    <div className='rounded-full border border-border-10 p-0.5 px-3 bg-accent'>
                                        <h1 className='text-xs'>Online</h1>
                                    </div>
                                </div>

                                <div className='flex items-center justify-end gap-4 pr-4'>
                                    <i className='ph ph-calendar-blank text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                    <i className='ph ph-heart-straight text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                    <i className='ph ph-share-fat text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                </div>
                            </div>

                            <h1 className='text-4xl font-bold tracking-tighter w-2xl leading-10'>Robo Race | TECHKRITI | IIT KASJDkjs </h1>

                            <div className='gri flex justify- w-full gap-x-2 gap-y-1'>
                                {detail.map((item, i) => (
                                    <div className='flex items-center gap-1 borde'>
                                        <i className={`ph ${item.icon} borde flex p-1 text-lg items-center justify-center rounded-md border-border-20`}></i>
                                        <p className=' leading-4 text-sm text-muted-text'>{item.subHead}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                </div>

                {/* SECTIONS BAR */}
                <div className='border-y border-border-10 flex items-center justify-center p-2 sticky top-0 z-99 left-0 mt-4 backdrop-blur-xl'>
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

                <div className='w-full flex gap-4 justify-between'>
                    <div className=''>
                        {d.map((item, i) => (
                            <div key={i} ref={(el) => (sectionRefs.current[item.head]) = el} className={`p-4 py-8 w-3xl flex-col flex gap-3 scroll-mt-14  ${i === d.length - 1 ? '' : 'border-b border-border-10'}`}>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-blue-500 rounded-full w-[3px] h-7'></div>
                                    <h1 className='text-2xl font-bold'>{item.head}</h1>
                                </div>

                                <div className='text-sm pl-6'>{item.subHead}</div>
                            </div>
                        ))}
                    </div>

                    <div className='border border-border-10 rounded-2xl p-4 flex w-full'>
                        sj
                    </div>

                </div>

            </div>
        </div>
    )
}