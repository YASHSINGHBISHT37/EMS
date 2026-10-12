import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import { data } from '../data/data'
import { useRef } from 'react'
import { Link, useLocation } from "react-router-dom"

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

/* ---------------- FAQs ---------------- */
function FAQs() {
    const [openFAQ, setOpenFAQ] = useState(null)
    const handleClick = (i) => setOpenFAQ(openFAQ === i ? null : i)
    const faqs = data.main.find((m) => m.head === 'Frequently Asked Questions')?.sub ?? []

    return (
        <div>
            {faqs.map((item, i) => (
                <div key={i} onClick={() => handleClick(i)} className={`flex flex-col py-2.5 cursor-pointer ${i === faqs.length - 1 ? '' : 'border-b border-border-10'}`}>
                    <div className='flex items-center justify-between'>
                        <h1 className='text- tracking-tight'>{item.question}</h1>
                        <i className={`ph transition-transform flex text-sm items-center justify-center p-1.5 rounded-full bg-muted-bg duration-300 ease-in-out ${openFAQ === i ? 'ph-minus rotate-180' : 'ph-plus rotate-0'}`}></i>
                    </div>

                    <div className={`grid transition-all duration-300 ease-in-out ${openFAQ === i ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                        <div className='overflow-hidden'>
                            <p className='text-sm leading-5 text-text/70 w-2xl'>{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Rounds() {
    const rounds = data.main.find((m) => m.head === 'Rounds & Stages')?.sub ?? []

    return (
        <div className='flex flex-col gap-8'>
            {rounds.map((item, i) => (
                <div key={i} className='flex items-center gap-8'>

                    <div className='relative flex items-start justify-center'>
                        <div className='bg-bg border border-border-10 w-11 h- rounded-xl flex flex-col p-0.5 items-center justify-between gap-0.5 relative z-9'>
                            <div style={{ background: data.theme }} className='w-full h-5 flex items-center justify-center rounded-lg'>
                                <h1 className='font-bold text-bg text-sm'>28</h1>
                            </div>
                            <h1 className='text-xs leading-3'>Oct</h1>

                        </div>
                        <div className={`w-px h-50 border-dashed border-border-20 absolute top-0 ${i === rounds.length - 1 ? '' : 'border-l'}`}></div>
                    </div>

                    <div className='flex flex-col flex-1 gap-1.5'>

                        <div className='flex items-center gap-2 text-sm tracking-tight px-2'>
                            <p>{item.startDate}</p>
                            <i className='ph ph-arrow-right'></i>
                            <p className='text-text/70'>{item.endDate}</p>
                        </div>

                        <div className='flex flex-col py-4 cursor-pointer border border-border-10/50 p-4 rounded-2xl bg-muted-bg'>
                            <h1 className='font-bold mb-2'>{item.title}</h1>
                            <p className='text-text/70 text-sm'>{item.sub}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Details() {
    const [open, setOpen] = useState(false)
    const [overflowing, setOverflowing] = useState(false)
    const ref = useRef(null)
    const item = data.main.find((n) => n.code === 'Details')

    useLayoutEffect(() => {
        if (ref.current) setOverflowing(ref.current.scrollHeight > 380)
    }, [item?.sub])

    if (!item || !item.sub) return null

    return (
        <div>
            <div
                ref={ref}
                className="details-content"
                style={{ maxHeight: open ? 'none' : '380px', overflow: 'hidden' }}
                dangerouslySetInnerHTML={{ __html: item.sub }}
            />
            {overflowing && (
                <button onClick={() => setOpen((o) => !o)} className="flex items-center gap-2 text-accent text-sm w-full justify-center">
                    <span>{open ? 'Read Less' : 'Read More'}</span>
                    <i className={`ph ph-caret-${open ? 'up' : 'down'}`}></i>
                </button>
            )}
        </div>
    )
}

function Organiser() {
    const item = data.main.find((n) => n.code === 'Contact')
    return (
        <div className='w-full grid grid-cols-2 gap-2'>
            {item.sub.map((item, i) => (
                <div className='flex items-center gap-3 bg-muted-bg p-2 rounded-2xl border border-border-10/50 h-16'>
                    <div className='borde bg-accent aspect-square h-12 rounded-xl border border-border-10 flex items-center justify-center'>
                        <h1 className='text-bg font-bold text-lg'>YSB</h1>
                    </div>


                    <div key={i} className='text-xs'>
                        <p className='font-medium text-sm'>{item.name}</p>
                        <p className='text-muted-text'>{item.email}</p>
                        <p className='text-muted-text'>{item.phoneNo}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

/* ---------------- Section content (by heading) ---------------- */
function Section({ item }) {
    switch (item.head) {

        case 'Rounds & Stages':
            return <Rounds />

        case 'Details':
            return <Details />

        case 'Dates & Deadlines':
            return (
                <div className='w-full grid grid-cols-2 gap-2'>
                    {item.sub.map((item, i) => (
                        <div className='flex items-center gap-3 bg-muted-bg p-2 rounded-2xl border border-border-10/50 h-16'>
                            <div className='bg-bg aspect-square h-full rounded-xl flex flex-col p-1 items-center justify-center border border-border-10'>
                                <div className='w-full h-1/2 bg-accent flex items-center justify-center rounded-xl'>
                                    <h1 className='font-bold text-bg text-sm'>18</h1>
                                </div>
                                <h1 className='text-sm'>Oct</h1>
                            </div>

                            <div key={i} className='text-xs flex flex-col gap-0.5'>
                                <p className='text-sm'>{item.date}</p>
                                <p className='text-muted-text'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )

        case 'Contact the Organisers':
            return <Organiser />

        case 'Frequently Asked Questions':
            return <FAQs />

        default:
            return typeof item.sub === 'string' && item.sub ? <div className='text-sm text-text/70'>{item.sub}</div> : null
    }
}

export default function DetailPage() {
    const detail = [
        { icon: 'ph-map-pin', head: 'Location', subHead: data.location },
        { icon: 'ph-users-four', head: 'Team Size', subHead: data.members },
        { icon: 'ph-broadcast', head: 'Mode', subHead: data.mode },
    ]
    const topRef = useRef(null)
    const [active, setActive] = useState('Home')
    const social = ['x-logo', 'instagram-logo', 'facebook-logo', 'linkedin-logo']

    const goTo = (label) => {
        setActive(label)
        if (label === 'Home') {
            topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return
        }
        const head = label === 'FAQs' ? 'Frequently Asked Questions' : label
        document.getElementById(slug(head))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="w-full flex flex-col items-center ">

            {/* SECTIONS BAR */}
            <div className='border-b w-full border-border-10 flex items-center justify-center p-2 fixed top-16 z-99 left-1/2 -translate-x-1/2 backdrop-blur-xl h-12'>
                <div onClick={() => goTo('Home')} className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration-200 p-1.5 px-3 rounded-xl'>
                    <i style={active ? { color: data.theme } : undefined} className={`ph ph-house relative text-xl transition-colors ${active === 'Home' ? 'text-accent' : 'text-muted-text'}`}></i>
                    <div style={{ background: data.theme }} className={`w-full h-0.5 rounded-full bg-accent absolute left-0 -bottom-1.5 origin-center transition-transform duration-300 ${active === 'Home' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </div>

                {data.main.map((item) => {
                    const isActive = active === item.code
                    return (
                        <div key={item} onClick={() => goTo(item.head)} className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration-200 p-2 px-3 rounded-xl'>
                            <h1 style={isActive ? { color: data.theme } : undefined} className={`relative cursor-pointer tracking-wide transition-colors text-sm ${isActive ? '' : 'text-muted-text'}`}>{item.code}</h1>
                            <div style={{ background: data.theme }} className={`w-full h-0.5 rounded-full absolute left-0 -bottom-1.5 origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                    )
                })}
            </div>

            <div ref={topRef} className="w-full max-w-7xl borde mt-30 border-border-10 bg-whit p-4 flex flex-col scroll-mt-60">

                {/* BANNER */}
                <div className='w-full h-100 rounded-3xl overflow-clip'>
                    <img src={`/${data.bannerImg}`} alt={data.title} className="w-full h-full object-cover" />
                </div>

                {/* LOGO / TITLE */}
                <div className='flex gap-4 w-full px-8 items-center py-8'>
                    <div className='w-36 aspect-square rounded-xl overflow-clip'>
                        <img src={`/${data.logoImg}`} alt={data.college} className="w-full aspect-square rounded-2xl object-cover" />
                    </div>

                    <div className='w- h-36 flex-1 justify-between flex flex-col gap-4'>
                        <div className='flex flex-col'>

                            {/* TOP */}
                            <div className='w-full flex justify-between items-center'>
                                {/* TAGS */}
                                <div className='flex items-center gap-2 text-bg mb-2'>
                                    {data.tags.map((item, i) => (
                                        <div style={{ background: data.theme }} key={i} className='rounded-full border border-border-10 p-0.5 px-3'>
                                            <h1 className='text-xs'>{item}</h1>
                                        </div>
                                    ))}
                                </div>

                                {/* CALENDAR / LIKE / SHARE */}
                                <div className='flex items-center justify-end gap-4 pr-4'>
                                    <i className='ph ph-calendar-blank text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                    <i className='ph ph-heart-straight text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                    <i className='ph ph-share-fat text-xl text-muted-text cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200'></i>
                                </div>
                            </div>

                            {/* TITLE / COLLEGE */}
                            <div>
                                <h1 className='text-4xl font-bold tracking-tighter leading-9'>{data.title}</h1>
                                <p className='text-sm text-muted-text '>{data.college}</p>
                            </div>
                        </div>

                        {/* LOCATION / MEMBERS / MODE */}
                        <div className='flex w-full gap-6'>
                            {detail.map((item, i) => (
                                <div key={i} className='flex items-center gap-1'>
                                    <i className={`ph ${item.icon} text-lg`}></i>
                                    <p className='leading-4 text-sm text-muted-text'>{item.subHead}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CONTENT + SIDEBAR */}
                <div className='flex justify-between gap-30 relative'>
                    <div className='w-3xl bg-whit rounded-3xl'>
                        {data.main.map((item, i) => (
                            <div key={i} id={slug(item.head)} className={`scroll-mt-26 flex flex-col gap-4 py-8 px-6 ${i === data.main.length - 1 ? '' : 'border-b border-border-10'}`}>
                                <div className='flex items-center py-2'>
                                    <div style={{ background: data.theme }} className='rounded-r-full w-1 h-8 absolute left-0'></div>
                                    <h1 className='font-bold tracking-wide text-2xl'>{item.head}</h1>
                                </div>

                                <Section item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='flex-1 pl-'>
                        <div className='border border-border-10 bg-muted-bg h-auto rounded-4xl p-2 sticky top-40 flex flex-col gap-4'>

                            <div className='flex flex-col px-2 pt-3 gap-4'>
                                <div className='px-'>
                                    <h1 className='text-3xl font-bold tracking-tight leading-8 mb-2'>{data.title}</h1>
                                    <div className='flex items-center gap-1'>
                                        {social.map((item, i) => (
                                            <i className={`ph ph-${item} text-2xl cursor-pointer`}></i>
                                        ))}
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 px-2'>
                                    <div className='flex gap-10 items-center justify-between text-sm'>
                                        <h1 className='font-bold text-text/70 text-md'>Starts from</h1>
                                        <p className=''>Oct 11, 2026</p>
                                    </div>

                                    <div className='flex gap-10 items-center justify-between text-sm'>
                                        <h1 className='font-bold text-text/70 text-md'>Ends in</h1>
                                        <p className=''>Oct 12, 2026</p>
                                    </div>

                                    <div className='flex gap-10 justify-between text-sm'>
                                        <h1 className='font-bold text-text/70 text-md'>Location</h1>
                                        <p className=' leading-4 text-right pl-2'>{data.location}</p>
                                    </div>

                                    <div className='flex gap-10 justify-between text-sm'>
                                        <h1 className='font-bold text-text/70 text-md'>Mode</h1>
                                        <p className=' leading-4 text-right'>{data.mode}</p>
                                    </div>
                                </div>
                            </div>


                            <div className='w-full rounded-full bg-bg border border-border-10 text-bg flex items-center justify-center p-3 cursor-pointer'>
                                <h1 className="text-2xl font-dot font-bold bg-linear-to-tr from-text via-accent to-text bg-clip-text text-transparent">Register</h1>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='w-7xl pr-130 py-4 flex flex-col gap-2'>
                <div className='flex  gap-2  text-text/70'>
                    <i className='ph ph-clock '></i>
                    <p className='text-xs'>Updated On: 07 Oct 26, 12:32 AM IST</p>
                </div>

                <div className='flex  gap-2 text-text/70'>
                    <i className='ph ph-info'></i>
                    <p className='text-xs'>The data on this page gets updated every 15 minutes.</p>
                </div>


                <div className='flex gap-2 text-text/70'>
                    <i className='ph ph-info'></i>
                    <p className='text-xs'>This opportunity has been listed by Dr.D.Y.Patil Institute of Technology, Pimpri, Pune. Unstop is not liable for any content mentioned in this opportunity or the process followed by the organizers for this opportunity. However, please raise a complaint if you want Unstop to look into the matter.</p>
                </div>
            </div>

        </div>
    )
}