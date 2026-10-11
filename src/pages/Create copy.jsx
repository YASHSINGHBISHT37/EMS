import React, { useState, useEffect } from 'react'

const input = 'flex-1 w-full border border-border-10 rounded-xl text-sm bg-muted-bg/50 h-10 flex items-center px-4 outline-0'
const area = 'w-full border border-border-10 rounded-2xl text-sm bg-muted-bg/50 p-4 outline-0 resize-y'

/* ---------------- Reusable bits ---------------- */
function Field({ label, required, error, children }) {
    return (
        <div className='flex-1'>
            <h1 className='px-1 text-sm mb-2'>{label} {required && <span className='text-warn'>*</span>}</h1>
            {children}
            {error && <p className='text-warn text-xs px-1 pt-0.5'>{error}</p>}
        </div>
    )
}

function TextBlock({ title, hint, required, rows = 8, value, onChange, error }) {
    return (
        <div>
            <div className='px-2 mb-2'>
                <h1 className='font-bold'>{title} {required && <span className='text-warn text-xs'>*</span>}</h1>
                {hint && <p className='text-xs text-muted-text tracking-wide'>{hint}</p>}
            </div>
            <textarea rows={rows} className={area} value={value} onChange={(e) => onChange(e.target.value)} />
            {error && <p className='text-warn text-xs px-1 pt-0.5'>{error}</p>}
        </div>
    )
}

// Add / remove list used by Rounds, Dates, Contact, FAQs
function ListEditor({ items, onChange, fields, empty, addLabel }) {
    const update = (i, key, val) => onChange(items.map((it, idx) => (idx === i ? { ...it, [key]: val } : it)))

    return (
        <div className='flex flex-col gap-4'>
            {items.map((it, i) => (
                <div key={i} className='relative border border-border-10 rounded-2xl p-4 flex flex-col gap-4'>
                    <button type='button' onClick={() => onChange(items.filter((_, idx) => idx !== i))}
                        className='absolute right-3 top-3 text-warn' aria-label='Remove'>
                        <i className='ph ph-trash'></i>
                    </button>
                    <div className='flex flex-wrap gap-6'>
                        {fields.map((f) => (
                            <div key={f.key} className={f.full ? 'w-full' : 'flex-1 min-w-48'}>
                                <Field label={f.label}>
                                    {f.area
                                        ? <textarea rows={3} className={area} value={it[f.key]} onChange={(e) => update(i, f.key, e.target.value)} />
                                        : <input type={f.type || 'text'} className={input} placeholder={f.placeholder} value={it[f.key]} onChange={(e) => update(i, f.key, e.target.value)} />}
                                </Field>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button type='button' onClick={() => onChange([...items, { ...empty }])}
                className='flex items-center gap-2 text-accent text-sm w-fit'>
                <i className='ph ph-plus'></i> {addLabel}
            </button>
        </div>
    )
}

/* ---------------- Sections ---------------- */
function Basic({ form, set, showErr }) {
    const short = (v) => showErr && v.trim().length < 3 && 'Minimum 3 characters required'

    return (
        <div className='flex flex-col gap-6'>
            <div className='w-full flex items-start justify-between gap-10'>
                <Field label='Opportunity Title' required error={short(form.title)}>
                    <input className={input} placeholder='Enter Event, Competition, Hackathon.....' value={form.title} onChange={(e) => set('title', e.target.value)} />
                </Field>
                <Field label='Organisation Name' required error={short(form.college)}>
                    <input className={input} placeholder='Enter organisation / college name' value={form.college} onChange={(e) => set('college', e.target.value)} />
                </Field>
            </div>

            <div className='w-full flex items-start justify-between gap-10'>
                <Field label='Opportunity Type' required error={short(form.type)}>
                    <input className={input} placeholder='Competitions, Hackathon, Internship.....' value={form.type} onChange={(e) => set('type', e.target.value)} />
                </Field>
                <Field label='Company Website URL'>
                    <input className={input} placeholder='https://' value={form.website} onChange={(e) => set('website', e.target.value)} />
                </Field>
            </div>

            <div className='w-full flex items-start justify-between gap-10'>
                <Field label='Mode'>
                    <select className={input} value={form.mode} onChange={(e) => set('mode', e.target.value)}>
                        <option>Online</option>
                        <option>Offline</option>
                        <option>Hybrid</option>
                    </select>
                </Field>
                <Field label='Team Size'>
                    <input className={input} placeholder='2-4 members' value={form.members} onChange={(e) => set('members', e.target.value)} />
                </Field>
            </div>

            <div className='w-full flex items-start justify-between gap-10'>
                <Field label='Location'>
                    <input className={input} placeholder='Venue / city' value={form.location} onChange={(e) => set('location', e.target.value)} />
                </Field>
                <Field label='Tags'>
                    <input className={input} placeholder='Comma separated: Competitions, Online' value={form.tags} onChange={(e) => set('tags', e.target.value)} />
                </Field>
            </div>

            <TextBlock title='Overview' required rows={6} hint='Short summary of the opportunity.'
                value={form.overview} onChange={(v) => set('overview', v)} error={showErr && !form.overview.trim() && 'Overview is required'} />

            <TextBlock title='Opportunity Description' required rows={10} hint='Include Rules, Eligibility, Process, Format, etc. (HTML allowed)'
                value={form.details} onChange={(v) => set('details', v)} error={showErr && !form.details.trim() && 'Description is required'} />
        </div>
    )
}

function Section({ item, form, set, showErr }) {
    switch (item.head) {
        case 'Basic Details':
            return <Basic form={form} set={set} showErr={showErr} />

        case 'Rounds & Stages':
            return <ListEditor items={form.rounds} onChange={(v) => set('rounds', v)} addLabel='Add round'
                empty={{ title: '', sub: '', startDate: '', endDate: '' }}
                fields={[
                    { key: 'title', label: 'Round Title', placeholder: 'Brief Video' },
                    { key: 'startDate', label: 'Start', placeholder: '10 Oct 26, 09:00 AM IST' },
                    { key: 'endDate', label: 'End', placeholder: '11 Oct 26, 09:00 PM IST' },
                    { key: 'sub', label: 'Description', area: true, full: true },
                ]} />

        case 'Prize & Rewards':
            return <TextBlock title='Awards, prizes & perks' rows={6} value={form.prizes} onChange={(v) => set('prizes', v)} />

        case 'Eligiblity':
            return <TextBlock title='Who can register?' rows={6} value={form.eligibility} onChange={(v) => set('eligibility', v)} />

        case 'Dates & Deadlines':
            return <ListEditor items={form.dates} onChange={(v) => set('dates', v)} addLabel='Add date'
                empty={{ title: '', date: '' }}
                fields={[
                    { key: 'title', label: 'Title', placeholder: 'Registration Deadline' },
                    { key: 'date', label: 'Date', placeholder: '08 Oct 26, 12:00 AM' },
                ]} />

        case 'Contact':
            return <ListEditor items={form.contacts} onChange={(v) => set('contacts', v)} addLabel='Add contact'
                empty={{ name: '', email: '', phoneNo: '' }}
                fields={[
                    { key: 'name', label: 'Name' },
                    { key: 'email', label: 'Email', type: 'email' },
                    { key: 'phoneNo', label: 'Phone', type: 'tel' },
                ]} />

        case 'Frequently Asked Questions':
            return <ListEditor items={form.faqs} onChange={(v) => set('faqs', v)} addLabel='Add question'
                empty={{ question: '', answer: '' }}
                fields={[
                    { key: 'question', label: 'Question', full: true },
                    { key: 'answer', label: 'Answer', area: true, full: true },
                ]} />

        default:
            return null
    }
}

const bar = [
    {
        head: 'Basic Details',
        code: 'Basic',
        sub: 'Provide basic details about the opportunity, participation type, mode of event, who can participate, and what skills are required.'
    },
    {
        head: 'Rounds & Stages',
        code: 'Rounds & Stages',
        sub: 'Define each stage of your Hiring Funnel. Arrange them in a sequence to clearly define the hiring process.'
    },
    {
        head: 'Prize & Rewards',
        code: 'Prize',
        sub: 'Mention awards and prizes, perks and other important details for this opportunity.'
    },
    {
        head: 'Eligiblity',
        code: 'Eligiblity',
        sub: 'Set eligibility rules to ensure that only relevant candidates apply to the opportunity. Who can register?'
    },
    {
        head: 'Dates & Deadlines',
        code: 'Dates & Deadlines',
        sub: 'Provide key dates like registration deadline, result date, event date, etc.'
    },
    {
        head: 'Contact',
        code: 'Additional Info',
        sub: 'Add contact details of key persons related to this Opportunity for candidate inquiries or assistance.'
    },
    {
        head: 'Frequently Asked Questions',
        code: 'FAQs',
        sub: 'Answer common questions candidates may have about this opportunity.'
    },
]

export default function Create() {
    const [active, setActive] = useState('Basic')
    const [showErr, setShowErr] = useState(false)
    const [form, setForm] = useState({
        title: '', college: '', type: '', website: '',
        mode: 'Online', members: '', location: '', tags: '',
        overview: '', details: '', prizes: '', eligibility: '',
        rounds: [{ title: '', sub: '', startDate: '', endDate: '' }],
        dates: [{ title: '', date: '' }],
        contacts: [{ name: '', email: '', phoneNo: '' }],
        faqs: [{ question: '', answer: '' }],
    })

    const set = (key, val) => setForm((f) => ({ ...f, [key]: val }))

    // Scroll-spy: highlight the section currently on screen
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.dataset.code)),
            { rootMargin: '-30% 0px -60% 0px' }
        )
        bar.forEach((b) => {
            const el = document.getElementById(b.code)
            if (el) obs.observe(el)
        })
        return () => obs.disconnect()
    }, [])

    const goTo = (code) => {
        setActive(code)
        document.getElementById(code)?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowErr(true)
        const ok = form.title.trim().length >= 3 && form.college.trim().length >= 3 &&
            form.type.trim().length >= 3 && form.overview.trim() && form.details.trim()
        if (!ok) return goTo('Basic')

        const payload = {
            ...form,
            tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        }
        console.log(payload) // yahan API call: fetch('/api/events', { method: 'POST', body: JSON.stringify(payload) })
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">

            {/* SECTIONS BAR */}
            <div className='border-y w-full border-border-10 flex items-center justify-center p-2 fixed top-16 z-99 left-1/2 -translate-x-1/2 backdrop-blur-xl h-12'>
                {bar.map((item) => {
                    const isActive = active === item.code
                    return (
                        <div key={item.code} onClick={() => goTo(item.code)}
                            className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration-200 p-2 px-3 rounded-xl'>
                            <h1 className={`relative cursor-pointer tracking-wide transition-colors text-sm ${isActive ? 'text-accent' : 'text-muted-text'}`}>{item.code}</h1>
                            <div className={`w-full bg-accent h-0.5 rounded-full absolute left-0 -bottom-1.5 origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                    )
                })}
            </div>

            <div className="w-full max-w-7xl mt-30 flex flex-col items-center">
                <div className='relative w-5xl'>
                    {bar.map((item, i) => (
                        <div key={item.head} id={item.code} data-code={item.code}
                            className={`scroll-mt-26 flex flex-col gap-4 py-8 px-6 ${i === bar.length - 1 ? '' : 'border-b border-border-10'}`}>
                            <div className='flex items-center py-2'>
                                <div className='rounded-r-full bg-accent w-1 h-8 absolute left-0'></div>
                                <div>
                                    <h1 className='font-bold tracking-wide text-2xl'>{item.head}</h1>
                                    <p className='text-xs text-muted-text'>{item.sub}</p>
                                </div>
                            </div>

                            <div className='px-20'>
                                <Section item={item} form={form} set={set} showErr={showErr} />
                            </div>
                        </div>
                    ))}

                    <div className='px-6 pb-16 flex justify-end'>
                        <button type='submit' className='bg-accent text-white text-sm font-medium rounded-xl px-8 h-10'>
                            Publish Opportunity
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}