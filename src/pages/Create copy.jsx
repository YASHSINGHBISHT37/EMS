import React, { useState } from 'react'

const TABS = ['Basics', 'Stages & Timeline', 'Details', 'Prizes', 'Review', 'FAQs & Discussions']

const inputClass =
    'w-full bg-bg border border-border-20 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors placeholder:text-muted-text'
const labelClass = 'text-sm font-medium mb-1.5 block'

export default function Create() {
    const [active, setActive] = useState(TABS[0])

    const [banner, setBanner] = useState(null)
    const [bannerPreview, setBannerPreview] = useState(null)
    const [logo, setLogo] = useState(null)
    const [logoPreview, setLogoPreview] = useState(null)

    const [form, setForm] = useState({
        title: '',
        description: '',
        location: '',
        mode: 'Online',
        teamSize: '',
        regDeadline: '',
        startDate: '',
        endDate: '',
        entryFee: '',
        prize1: '',
        prize2: '',
        prize3: '',
    })

    const [stages, setStages] = useState([
        { title: 'Registration', date: '', desc: '' },
    ])

    const [faqs, setFaqs] = useState([{ q: '', a: '' }])

    function update(key, value) {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    function handleImageChange(e, setFile, setPreview) {
        const file = e.target.files?.[0]
        if (!file) return
        setFile(file)
        setPreview(URL.createObjectURL(file))
    }

    function updateStage(index, key, value) {
        setStages((prev) => prev.map((s, i) => (i === index ? { ...s, [key]: value } : s)))
    }

    function addStage() {
        setStages((prev) => [...prev, { title: '', date: '', desc: '' }])
    }

    function removeStage(index) {
        setStages((prev) => prev.filter((_, i) => i !== index))
    }

    function updateFaq(index, key, value) {
        setFaqs((prev) => prev.map((f, i) => (i === index ? { ...f, [key]: value } : f)))
    }

    function addFaq() {
        setFaqs((prev) => [...prev, { q: '', a: '' }])
    }

    function removeFaq(index) {
        setFaqs((prev) => prev.filter((_, i) => i !== index))
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
        console.log('Publishing event:', { ...form, banner, logo, stages, faqs })
    }

    return (
        <div className='w-5xl border border-border-10 rounded-3xl overflow-hidden bg-muted-bg h-full pt-20 relative'>

            {/* SECTIONS BAR */}
            <div className='border-y border-border-10 flex items-center justify-center p-2 absolute w-full top-0 z-99 left-0 backdrop-blur-xl'>
                {TABS.map((item) => {
                    const isActive = active === item
                    return (
                        <div
                            key={item}
                            onClick={() => setActive(item)}
                            className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration-200 p-2 px-3 rounded-xl'
                        >
                            <h1 className={`relative cursor-pointer transition-colors text-sm ${isActive ? 'text-blue-600' : 'text-muted-text'}`}>{item}</h1>
                            <div className={`w-full h-0.5 rounded-full bg-blue-500 absolute left-0 -bottom-3 origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                    )
                })}
            </div>

            {/* BANNER + LOGO */}
            <div className='w-full relative'>
                <label htmlFor='banner-upload' className='w-full h-50 overflow-clip block cursor-pointer bg-bg'>
                    {bannerPreview ? (
                        <img src={bannerPreview} className='w-full h-full object-cover' />
                    ) : (
                        <div className='w-full h-full flex flex-col items-center justify-center gap-2 text-muted-text'>
                            <i className='ph ph-image text-3xl'></i>
                            <p className='text-sm'>Click to upload banner</p>
                        </div>
                    )}
                </label>
                <input id='banner-upload' type='file' accept='image/*' className='hidden' onChange={(e) => handleImageChange(e, setBanner, setBannerPreview)} />

                <label
                    htmlFor='logo-upload'
                    className='w-26 aspect-square border border-border-10 p-1 rounded-2xl bg-bg absolute z-20 -bottom-10 left-4 overflow-clip cursor-pointer block'
                >
                    {logoPreview ? (
                        <img src={logoPreview} className='w-full h-full object-cover rounded-xl' />
                    ) : (
                        <div className='w-full h-full flex items-center justify-center rounded-xl bg-muted-bg text-muted-text'>
                            <i className='ph ph-image text-xl'></i>
                        </div>
                    )}
                </label>
                <input id='logo-upload' type='file' accept='image/*' className='hidden' onChange={(e) => handleImageChange(e, setLogo, setLogoPreview)} />
            </div>

            {/* TAB CONTENT */}
            <div className='pt-16 px-8 pb-8 flex flex-col gap-6'>

                {active === 'Basics' && (
                    <div className='flex flex-col gap-5'>
                        <div>
                            <label className={labelClass}>Event Title</label>
                            <input
                                className={inputClass}
                                placeholder='e.g. Hacks 2026 – Hub for Advanced Creativity, Knowledge & Solutions'
                                value={form.title}
                                onChange={(e) => update('title', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Description</label>
                            <textarea
                                className={`${inputClass} resize-none h-32`}
                                placeholder='Tell people what this event is about...'
                                value={form.description}
                                onChange={(e) => update('description', e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {active === 'Stages & Timeline' && (
                    <div className='flex flex-col gap-4'>
                        {stages.map((stage, i) => (
                            <div key={i} className='border border-border-10 rounded-2xl p-4 flex flex-col gap-3 bg-bg relative'>
                                {stages.length > 1 && (
                                    <button
                                        type='button'
                                        onClick={() => removeStage(i)}
                                        className='absolute top-3 right-3 text-muted-text hover:text-red-500 transition-colors'
                                    >
                                        <i className='ph ph-x text-lg'></i>
                                    </button>
                                )}
                                <div className='grid grid-cols-2 gap-4'>
                                    <input
                                        className={inputClass}
                                        placeholder='Stage title (e.g. Registration)'
                                        value={stage.title}
                                        onChange={(e) => updateStage(i, 'title', e.target.value)}
                                    />
                                    <input
                                        type='datetime-local'
                                        className={inputClass}
                                        value={stage.date}
                                        onChange={(e) => updateStage(i, 'date', e.target.value)}
                                    />
                                </div>
                                <textarea
                                    className={`${inputClass} resize-none h-20`}
                                    placeholder='What happens in this stage?'
                                    value={stage.desc}
                                    onChange={(e) => updateStage(i, 'desc', e.target.value)}
                                />
                            </div>
                        ))}
                        <button
                            type='button'
                            onClick={addStage}
                            className='self-start px-4 py-2 rounded-xl text-sm font-medium border border-border-20 hover:bg-bg transition-colors flex items-center gap-2'
                        >
                            <i className='ph ph-plus'></i> Add Stage
                        </button>
                    </div>
                )}

                {active === 'Details' && (
                    <div className='flex flex-col gap-5'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <label className={labelClass}>Location</label>
                                <input
                                    className={inputClass}
                                    placeholder='City, State, Country'
                                    value={form.location}
                                    onChange={(e) => update('location', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Mode</label>
                                <select className={inputClass} value={form.mode} onChange={(e) => update('mode', e.target.value)}>
                                    <option>Online</option>
                                    <option>Offline</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Team Size</label>
                                <input
                                    className={inputClass}
                                    placeholder='e.g. 1-6 Members'
                                    value={form.teamSize}
                                    onChange={(e) => update('teamSize', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <label className={labelClass}>Registration Deadline</label>
                                <input type='datetime-local' className={inputClass} value={form.regDeadline} onChange={(e) => update('regDeadline', e.target.value)} />
                            </div>
                            <div>
                                <label className={labelClass}>Start Date</label>
                                <input type='datetime-local' className={inputClass} value={form.startDate} onChange={(e) => update('startDate', e.target.value)} />
                            </div>
                            <div>
                                <label className={labelClass}>End Date</label>
                                <input type='datetime-local' className={inputClass} value={form.endDate} onChange={(e) => update('endDate', e.target.value)} />
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <label className={labelClass}>Entry Fee</label>
                            <input className={inputClass} placeholder='Free, or ₹ amount' value={form.entryFee} onChange={(e) => update('entryFee', e.target.value)} />
                        </div>
                    </div>
                )}

                {active === 'Prizes' && (
                    <div className='grid grid-cols-3 gap-4'>
                        <div>
                            <label className={labelClass}>1st Prize</label>
                            <input className={inputClass} placeholder='e.g. ₹1,00,000' value={form.prize1} onChange={(e) => update('prize1', e.target.value)} />
                        </div>
                        <div>
                            <label className={labelClass}>2nd Prize</label>
                            <input className={inputClass} placeholder='e.g. ₹50,000' value={form.prize2} onChange={(e) => update('prize2', e.target.value)} />
                        </div>
                        <div>
                            <label className={labelClass}>3rd Prize</label>
                            <input className={inputClass} placeholder='e.g. ₹25,000' value={form.prize3} onChange={(e) => update('prize3', e.target.value)} />
                        </div>
                    </div>
                )}

                {active === 'Review' && (
                    <div className='flex flex-col gap-4'>
                        <div className='border border-border-10 rounded-2xl p-4 bg-bg flex flex-col gap-2'>
                            <h1 className='font-bold text-lg'>{form.title || 'Untitled Event'}</h1>
                            <p className='text-sm text-muted-text'>{form.description || 'No description yet.'}</p>
                            <div className='flex gap-6 text-sm text-muted-text mt-2'>
                                <span><i className='ph ph-map-pin'></i> {form.location || '—'}</span>
                                <span><i className='ph ph-broadcast'></i> {form.mode}</span>
                                <span><i className='ph ph-users-four'></i> {form.teamSize || '—'}</span>
                            </div>
                        </div>
                        <div className='border border-border-10 rounded-2xl p-4 bg-bg'>
                            <h1 className='font-semibold mb-2'>Stages</h1>
                            {stages.filter((s) => s.title).map((s, i) => (
                                <p key={i} className='text-sm text-muted-text'>• {s.title}</p>
                            ))}
                        </div>
                        <div className='border border-border-10 rounded-2xl p-4 bg-bg flex gap-6'>
                            <p className='text-sm'><span className='text-muted-text'>1st:</span> {form.prize1 || '—'}</p>
                            <p className='text-sm'><span className='text-muted-text'>2nd:</span> {form.prize2 || '—'}</p>
                            <p className='text-sm'><span className='text-muted-text'>3rd:</span> {form.prize3 || '—'}</p>
                        </div>
                    </div>
                )}

                {active === 'FAQs & Discussions' && (
                    <div className='flex flex-col gap-4'>
                        {faqs.map((faq, i) => (
                            <div key={i} className='border border-border-10 rounded-2xl p-4 flex flex-col gap-3 bg-bg relative'>
                                {faqs.length > 1 && (
                                    <button
                                        type='button'
                                        onClick={() => removeFaq(i)}
                                        className='absolute top-3 right-3 text-muted-text hover:text-red-500 transition-colors'
                                    >
                                        <i className='ph ph-x text-lg'></i>
                                    </button>
                                )}
                                <input
                                    className={inputClass}
                                    placeholder='Question'
                                    value={faq.q}
                                    onChange={(e) => updateFaq(i, 'q', e.target.value)}
                                />
                                <textarea
                                    className={`${inputClass} resize-none h-20`}
                                    placeholder='Answer'
                                    value={faq.a}
                                    onChange={(e) => updateFaq(i, 'a', e.target.value)}
                                />
                            </div>
                        ))}
                        <button
                            type='button'
                            onClick={addFaq}
                            className='self-start px-4 py-2 rounded-xl text-sm font-medium border border-border-20 hover:bg-bg transition-colors flex items-center gap-2'
                        >
                            <i className='ph ph-plus'></i> Add FAQ
                        </button>
                    </div>
                )}

                {/* NAV BUTTONS */}
                <div className='flex justify-between pt-4 border-t border-border-10'>
                    <button
                        type='button'
                        onClick={goBack}
                        disabled={active === TABS[0]}
                        className='px-5 py-2.5 rounded-full text-sm font-semibold border border-border-20 hover:bg-bg transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
                    >
                        Back
                    </button>

                    {active === TABS[TABS.length - 1] ? (
                        <button
                            type='button'
                            onClick={handlePublish}
                            className='px-6 py-2.5 rounded-full text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-bg transition-colors'
                        >
                            Publish Event
                        </button>
                    ) : (
                        <button
                            type='button'
                            onClick={goNext}
                            className='px-6 py-2.5 rounded-full text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-bg transition-colors'
                        >
                            Next
                        </button>
                    )}
                </div>

            </div>

        </div>
    )
}