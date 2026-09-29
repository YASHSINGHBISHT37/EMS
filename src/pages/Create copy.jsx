import React, { useState } from 'react'

const TABS = ['Basics', 'Application', 'Links', 'Brand', 'Dates', 'Partners', 'Prizes', 'Lineup', 'Schedule', 'FAQs']

const inputClass =
    'w-full bg-bg outline-blue-600 outline-1.5 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-4 text-sm placeholder:text-muted-text'
const labelClass = 'text-sm px-2'
const hintClass = 'text-xs text-muted-text px-2'
const fieldWrap = 'w-full flex flex-col gap-1'

export default function Create() {
    const [active, setActive] = useState(TABS[0])

    // ---- Basics / Application / Links ----
    const [form, setForm] = useState({
        title: '',
        orgName: '',
        about: '',
        mode: 'Online',
        location: '',
        category: '',
        teamSizeMin: '',
        teamSizeMax: '',
        maxTeams: '',
        eligibility: '',
        entryFee: '',
        website: '',
        contactEmail: '',
        codeOfConduct: '',
        termsLink: '',
        discord: '',
        instagram: '',
    })

    // ---- Brand ----
    const [banner, setBanner] = useState(null)
    const [bannerPreview, setBannerPreview] = useState(null)
    const [logo, setLogo] = useState(null)
    const [logoPreview, setLogoPreview] = useState(null)

    // ---- Dates ----
    const [dates, setDates] = useState({
        timezone: 'Asia/Calcutta',
        appsOpen: '',
        appsClose: '',
        eventBegins: '',
        submissionDeadline: '',
        resultsDate: '',
    })

    // ---- Partners ----
    const [partners, setPartners] = useState([{ name: '', tier: 'Gold', website: '' }])

    // ---- Prizes ----
    const [prizes, setPrizes] = useState({ first: '', second: '', third: '', pool: '' })
    const [specialPrizes, setSpecialPrizes] = useState([{ title: '', reward: '' }])

    // ---- Lineup (judges / mentors / speakers) ----
    const [lineup, setLineup] = useState([{ name: '', role: 'Judge', designation: '', linkedin: '' }])

    // ---- Schedule ----
    const [schedule, setSchedule] = useState([{ time: '', activity: '' }])

    // ---- FAQs ----
    const [faqs, setFaqs] = useState([{ q: '', a: '' }])

    function update(key, value) {
        setForm((prev) => ({ ...prev, [key]: value }))
    }
    function updateDate(key, value) {
        setDates((prev) => ({ ...prev, [key]: value }))
    }
    function updatePrize(key, value) {
        setPrizes((prev) => ({ ...prev, [key]: value }))
    }

    function handleImageChange(e, setFile, setPreview) {
        const file = e.target.files?.[0]
        if (!file) return
        setFile(file)
        setPreview(URL.createObjectURL(file))
    }

    // generic helpers for list-based sections (partners, specialPrizes, lineup, schedule, faqs)
    function updateListItem(setList, index, key, value) {
        setList((prev) => prev.map((item, i) => (i === index ? { ...item, [key]: value } : item)))
    }
    function addListItem(setList, empty) {
        setList((prev) => [...prev, empty])
    }
    function removeListItem(setList, index) {
        setList((prev) => prev.filter((_, i) => i !== index))
    }

    function goNext() {
        const i = TABS.indexOf(active)
        if (i < TABS.length - 1) setActive(TABS[i + 1])
    }
    function goBack() {
        const i = TABS.indexOf(active)
        if (i > 0) setActive(TABS[i - 1])
    }

    function handlePublish() {
        // TODO: wire this up to your backend / API call
        console.log('Publishing event:', { form, banner, logo, dates, partners, prizes, specialPrizes, lineup, schedule, faqs })
    }

    const RemoveBtn = ({ onClick }) => (
        <button type='button' onClick={onClick} className='absolute top-3 right-3 text-muted-text hover:text-red-500 transition-colors'>
            <i className='ph ph-x text-lg'></i>
        </button>
    )

    const AddBtn = ({ onClick, label }) => (
        <button
            type='button'
            onClick={onClick}
            className='self-start px-4 py-2 rounded-xl text-sm font-medium border border-border-20 hover:bg-bg transition-colors flex items-center gap-2'
        >
            <i className='ph ph-plus'></i> {label}
        </button>
    )

    return (
        <div className='w-full min-h-screen border border-border-10 rounded-3xl bg-muted-bg h-full relative overflow-clip'>

            {/* SECTIONS BAR */}
            <div className='border-b border-border-10 flex items-center justify-center p-2 sticky w-full top-0 z-99 left-0 backdrop-blur-xl overflow-x-auto scrollbar-hide'>
                {TABS.map((item) => {
                    const isActive = active === item
                    return (
                        <div
                            key={item}
                            onClick={() => setActive(item)}
                            className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration-200 p-2 px-3 rounded-xl shrink-0'
                        >
                            <h1 className={`relative cursor-pointer transition-colors text-sm whitespace-nowrap ${isActive ? 'text-blue-600' : 'text-muted-text'}`}>{item}</h1>
                            <div className={`w-full h-0.5 rounded-full bg-blue-500 absolute left-0 -bottom-2 origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                    )
                })}
            </div>

            {/* FORM */}
            <div className='w-full relative flex flex-col gap-4 p-4 max-w-4xl mx-auto'>

                {/* ---------------- BASICS ---------------- */}
                {active === 'Basics' && (
                    <>
                        <div className='flex items-center justify-between w-full gap-4'>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Event Title <span className='text-red-700'>*</span></h1>
                                <input className={inputClass} type='text' placeholder='Please enter the name of your hackathon.' value={form.title} onChange={(e) => update('title', e.target.value)} />
                                <p className={hintClass}>Max 200 characters</p>
                            </div>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Organisation Name <span className='text-red-700'>*</span></h1>
                                <input className={inputClass} type='text' placeholder='Your organisation or college name.' value={form.orgName} onChange={(e) => update('orgName', e.target.value)} />
                                <p className={hintClass}>Max 200 characters</p>
                            </div>
                        </div>

                        <div className={fieldWrap}>
                            <h1 className={labelClass}>About <span className='text-red-700'>*</span></h1>
                            <textarea className={`${inputClass} resize-none h-32`} placeholder='What is this event about?' value={form.about} onChange={(e) => update('about', e.target.value)} />
                            <p className={hintClass}>Max 2000 characters</p>
                        </div>

                        <div className='flex items-center justify-between w-full gap-4'>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Mode <span className='text-red-700'>*</span></h1>
                                <select className={inputClass} value={form.mode} onChange={(e) => update('mode', e.target.value)}>
                                    <option>Online</option>
                                    <option>Offline</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Location {form.mode !== 'Online' && <span className='text-red-700'>*</span>}</h1>
                                <input className={inputClass} type='text' placeholder='City, State, Country' value={form.location} onChange={(e) => update('location', e.target.value)} disabled={form.mode === 'Online'} />
                            </div>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Category</h1>
                                <input className={inputClass} type='text' placeholder='e.g. Hackathon, Workshop' value={form.category} onChange={(e) => update('category', e.target.value)} />
                            </div>
                        </div>
                    </>
                )}

                {/* ---------------- APPLICATION ---------------- */}
                {active === 'Application' && (
                    <>
                        <div className='flex items-center justify-between w-full gap-4'>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Min Team Size <span className='text-red-700'>*</span></h1>
                                <input className={inputClass} type='number' placeholder='1' value={form.teamSizeMin} onChange={(e) => update('teamSizeMin', e.target.value)} />
                            </div>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Max Team Size <span className='text-red-700'>*</span></h1>
                                <input className={inputClass} type='number' placeholder='6' value={form.teamSizeMax} onChange={(e) => update('teamSizeMax', e.target.value)} />
                            </div>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Max Teams / Participants</h1>
                                <input className={inputClass} type='number' placeholder='e.g. 500' value={form.maxTeams} onChange={(e) => update('maxTeams', e.target.value)} />
                            </div>
                        </div>

                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Eligibility</h1>
                            <input className={inputClass} type='text' placeholder='e.g. Open to all college students' value={form.eligibility} onChange={(e) => update('eligibility', e.target.value)} />
                        </div>

                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Entry Fee</h1>
                            <input className={inputClass} type='text' placeholder='Free, or ₹ amount' value={form.entryFee} onChange={(e) => update('entryFee', e.target.value)} />
                        </div>
                    </>
                )}

                {/* ---------------- LINKS ---------------- */}
                {active === 'Links' && (
                    <>
                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Event Website</h1>
                            <input className={inputClass} type='text' placeholder='https://yourevent.com' value={form.website} onChange={(e) => update('website', e.target.value)} />
                        </div>

                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Contact Email</h1>
                            <input className={inputClass} type='email' placeholder='help@hackathon.com' value={form.contactEmail} onChange={(e) => update('contactEmail', e.target.value)} />
                        </div>

                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Link to Code of Conduct</h1>
                            <input className={inputClass} type='text' placeholder='https://...' value={form.codeOfConduct} onChange={(e) => update('codeOfConduct', e.target.value)} />
                        </div>

                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Link to Terms & Conditions</h1>
                            <input className={inputClass} type='text' placeholder='https://...' value={form.termsLink} onChange={(e) => update('termsLink', e.target.value)} />
                        </div>

                        <div className='flex items-center justify-between w-full gap-4'>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Discord</h1>
                                <input className={inputClass} type='text' placeholder='https://discord.gg/...' value={form.discord} onChange={(e) => update('discord', e.target.value)} />
                            </div>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>Instagram</h1>
                                <input className={inputClass} type='text' placeholder='https://instagram.com/...' value={form.instagram} onChange={(e) => update('instagram', e.target.value)} />
                            </div>
                        </div>
                    </>
                )}

                {/* ---------------- BRAND ---------------- */}
                {active === 'Brand' && (
                    <>
                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Banner Image</h1>
                            <label htmlFor='banner-upload' className='w-full h-56 rounded-2xl border-2 border-dashed border-border-20 flex items-center justify-center cursor-pointer overflow-hidden bg-bg hover:border-blue-500 transition-colors'>
                                {bannerPreview ? (
                                    <img src={bannerPreview} className='w-full h-full object-cover' />
                                ) : (
                                    <div className='flex flex-col items-center gap-2 text-muted-text'>
                                        <i className='ph ph-image text-4xl'></i>
                                        <p className='text-sm'>Click to upload a banner (16:9 recommended)</p>
                                    </div>
                                )}
                            </label>
                            <input id='banner-upload' type='file' accept='image/*' className='hidden' onChange={(e) => handleImageChange(e, setBanner, setBannerPreview)} />
                        </div>

                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Logo</h1>
                            <label htmlFor='logo-upload' className='w-32 aspect-square rounded-2xl border-2 border-dashed border-border-20 flex items-center justify-center cursor-pointer overflow-hidden bg-bg hover:border-blue-500 transition-colors'>
                                {logoPreview ? (
                                    <img src={logoPreview} className='w-full h-full object-cover' />
                                ) : (
                                    <i className='ph ph-image text-2xl text-muted-text'></i>
                                )}
                            </label>
                            <input id='logo-upload' type='file' accept='image/*' className='hidden' onChange={(e) => handleImageChange(e, setLogo, setLogoPreview)} />
                        </div>
                    </>
                )}

                {/* ---------------- DATES ---------------- */}
                {active === 'Dates' && (
                    <>
                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Timezone</h1>
                            <select className={inputClass} value={dates.timezone} onChange={(e) => updateDate('timezone', e.target.value)}>
                                <option value='Asia/Calcutta'>Asia/Calcutta</option>
                                <option value='UTC'>UTC</option>
                            </select>
                        </div>

                        {[
                            { key: 'appsOpen', label: 'Applications Open' },
                            { key: 'appsClose', label: 'Applications Close' },
                            { key: 'eventBegins', label: 'Hackathon Begins' },
                            { key: 'submissionDeadline', label: 'Submission Deadline' },
                            { key: 'resultsDate', label: 'Announcement of Results' },
                        ].map((d) => (
                            <div key={d.key} className={fieldWrap}>
                                <h1 className={labelClass}>{d.label}</h1>
                                <div className='flex gap-4'>
                                    <input
                                        className={inputClass}
                                        type='date'
                                        value={dates[d.key].split('T')[0] || ''}
                                        onChange={(e) => updateDate(d.key, `${e.target.value}T${dates[d.key].split('T')[1] || '00:00'}`)}
                                    />
                                    <input
                                        className={inputClass}
                                        type='time'
                                        value={dates[d.key].split('T')[1] || ''}
                                        onChange={(e) => updateDate(d.key, `${dates[d.key].split('T')[0] || ''}T${e.target.value}`)}
                                    />
                                </div>
                            </div>
                        ))}
                    </>
                )}

                {/* ---------------- PARTNERS ---------------- */}
                {active === 'Partners' && (
                    <>
                        {partners.map((p, i) => (
                            <div key={i} className='border border-border-10 rounded-2xl p-4 flex flex-col gap-3 bg-bg relative'>
                                {partners.length > 1 && <RemoveBtn onClick={() => removeListItem(setPartners, i)} />}
                                <div className='grid grid-cols-3 gap-4'>
                                    <input className={inputClass} placeholder='Partner / Sponsor name' value={p.name} onChange={(e) => updateListItem(setPartners, i, 'name', e.target.value)} />
                                    <select className={inputClass} value={p.tier} onChange={(e) => updateListItem(setPartners, i, 'tier', e.target.value)}>
                                        <option>Title Sponsor</option>
                                        <option>Gold</option>
                                        <option>Silver</option>
                                        <option>Community Partner</option>
                                    </select>
                                    <input className={inputClass} placeholder='Website link' value={p.website} onChange={(e) => updateListItem(setPartners, i, 'website', e.target.value)} />
                                </div>
                            </div>
                        ))}
                        <AddBtn onClick={() => addListItem(setPartners, { name: '', tier: 'Gold', website: '' })} label='Add Partner' />
                    </>
                )}

                {/* ---------------- PRIZES ---------------- */}
                {active === 'Prizes' && (
                    <>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>1st Prize</h1>
                                <input className={inputClass} placeholder='e.g. ₹1,00,000' value={prizes.first} onChange={(e) => updatePrize('first', e.target.value)} />
                            </div>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>2nd Prize</h1>
                                <input className={inputClass} placeholder='e.g. ₹50,000' value={prizes.second} onChange={(e) => updatePrize('second', e.target.value)} />
                            </div>
                            <div className={fieldWrap}>
                                <h1 className={labelClass}>3rd Prize</h1>
                                <input className={inputClass} placeholder='e.g. ₹25,000' value={prizes.third} onChange={(e) => updatePrize('third', e.target.value)} />
                            </div>
                        </div>

                        <div className={fieldWrap}>
                            <h1 className={labelClass}>Total Prize Pool</h1>
                            <input className={inputClass} placeholder='e.g. ₹2,00,000' value={prizes.pool} onChange={(e) => updatePrize('pool', e.target.value)} />
                        </div>

                        <h1 className='text-sm font-medium px-2 mt-2'>Special Category Prizes</h1>
                        {specialPrizes.map((sp, i) => (
                            <div key={i} className='border border-border-10 rounded-2xl p-4 flex gap-4 bg-bg relative'>
                                {specialPrizes.length > 1 && <RemoveBtn onClick={() => removeListItem(setSpecialPrizes, i)} />}
                                <input className={inputClass} placeholder='e.g. Best Use of AI' value={sp.title} onChange={(e) => updateListItem(setSpecialPrizes, i, 'title', e.target.value)} />
                                <input className={inputClass} placeholder='Reward' value={sp.reward} onChange={(e) => updateListItem(setSpecialPrizes, i, 'reward', e.target.value)} />
                            </div>
                        ))}
                        <AddBtn onClick={() => addListItem(setSpecialPrizes, { title: '', reward: '' })} label='Add Special Prize' />
                    </>
                )}

                {/* ---------------- LINEUP ---------------- */}
                {active === 'Lineup' && (
                    <>
                        {lineup.map((person, i) => (
                            <div key={i} className='border border-border-10 rounded-2xl p-4 flex flex-col gap-3 bg-bg relative'>
                                {lineup.length > 1 && <RemoveBtn onClick={() => removeListItem(setLineup, i)} />}
                                <div className='grid grid-cols-4 gap-4'>
                                    <input className={inputClass} placeholder='Name' value={person.name} onChange={(e) => updateListItem(setLineup, i, 'name', e.target.value)} />
                                    <select className={inputClass} value={person.role} onChange={(e) => updateListItem(setLineup, i, 'role', e.target.value)}>
                                        <option>Judge</option>
                                        <option>Mentor</option>
                                        <option>Speaker</option>
                                    </select>
                                    <input className={inputClass} placeholder='Designation' value={person.designation} onChange={(e) => updateListItem(setLineup, i, 'designation', e.target.value)} />
                                    <input className={inputClass} placeholder='LinkedIn link' value={person.linkedin} onChange={(e) => updateListItem(setLineup, i, 'linkedin', e.target.value)} />
                                </div>
                            </div>
                        ))}
                        <AddBtn onClick={() => addListItem(setLineup, { name: '', role: 'Judge', designation: '', linkedin: '' })} label='Add Person' />
                    </>
                )}

                {/* ---------------- SCHEDULE ---------------- */}
                {active === 'Schedule' && (
                    <>
                        {schedule.map((item, i) => (
                            <div key={i} className='border border-border-10 rounded-2xl p-4 flex gap-4 bg-bg relative items-center'>
                                {schedule.length > 1 && <RemoveBtn onClick={() => removeListItem(setSchedule, i)} />}
                                <input className={`${inputClass} w-40`} type='time' value={item.time} onChange={(e) => updateListItem(setSchedule, i, 'time', e.target.value)} />
                                <input className={inputClass} placeholder='e.g. Opening Ceremony' value={item.activity} onChange={(e) => updateListItem(setSchedule, i, 'activity', e.target.value)} />
                            </div>
                        ))}
                        <AddBtn onClick={() => addListItem(setSchedule, { time: '', activity: '' })} label='Add Schedule Item' />
                    </>
                )}

                {/* ---------------- FAQS ---------------- */}
                {active === 'FAQs' && (
                    <>
                        {faqs.map((faq, i) => (
                            <div key={i} className='border border-border-10 rounded-2xl p-4 flex flex-col gap-3 bg-bg relative'>
                                {faqs.length > 1 && <RemoveBtn onClick={() => removeListItem(setFaqs, i)} />}
                                <input className={inputClass} placeholder='Question' value={faq.q} onChange={(e) => updateListItem(setFaqs, i, 'q', e.target.value)} />
                                <textarea className={`${inputClass} resize-none h-20`} placeholder='Answer' value={faq.a} onChange={(e) => updateListItem(setFaqs, i, 'a', e.target.value)} />
                            </div>
                        ))}
                        <AddBtn onClick={() => addListItem(setFaqs, { q: '', a: '' })} label='Add FAQ' />
                    </>
                )}

                {/* ---------------- NAV BUTTONS ---------------- */}
                <div className='flex justify-between pt-4 border-t border-border-10 mt-4'>
                    <button
                        type='button'
                        onClick={goBack}
                        disabled={active === TABS[0]}
                        className='px-5 py-2.5 rounded-full text-sm font-semibold border border-border-20 hover:bg-bg transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
                    >
                        Back
                    </button>

                    {active === TABS[TABS.length - 1] ? (
                        <button type='button' onClick={handlePublish} className='px-6 py-2.5 rounded-full text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-bg transition-colors'>
                            Publish Event
                        </button>
                    ) : (
                        <button type='button' onClick={goNext} className='px-6 py-2.5 rounded-full text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-bg transition-colors'>
                            Next
                        </button>
                    )}
                </div>

            </div>

        </div>
    )
}