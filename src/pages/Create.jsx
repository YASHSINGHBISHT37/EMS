import React, { useState, useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Image from '@tiptap/extension-image'

const input = 'flex-1 w-full border bor rounded-xl text-sm bg-bg h-10 flex item-center px-3 outline-0 border-accent/30 border-dashed'

function ToxEditer() {
    const fileRef = useRef(null)
    const editor = useEditor({
        extensions: [StarterKit, Superscript, Subscript, Image, TextAlign.configure({ types: ['paragraph', 'heading'] }),], shouldRerenderOnTransaction: true,
        editorProps: { attributes: { class: 'max-h-100 h-100 overflow-y-auto rounded-2xl border border-border-20 p-4 text-sm bg-bg outline-none [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_img]:max-w-80 [&_img]:rounded-lg [&_img]:my-2', }, }
    })

    if (!editor) return null
    const c = () => editor.chain().focus()

    const groups = [
        [
            { icon: 'ph-text-b', run: () => c().toggleBold().run(), on: editor.isActive('bold') },
            { icon: 'ph-text-italic', run: () => c().toggleItalic().run(), on: editor.isActive('italic') },
            { icon: 'ph-text-underline', run: () => c().toggleUnderline().run(), on: editor.isActive('underline') },
            { icon: 'ph-text-strikethrough', run: () => c().toggleStrike().run(), on: editor.isActive('strike') },
        ],
        [
            { icon: 'ph-text-align-left', run: () => c().setTextAlign('left').run(), on: editor.isActive({ textAlign: 'left' }) },
            { icon: 'ph-text-align-center', run: () => c().setTextAlign('center').run(), on: editor.isActive({ textAlign: 'center' }) },
            { icon: 'ph-text-align-right', run: () => c().setTextAlign('right').run(), on: editor.isActive({ textAlign: 'right' }) },
            { icon: 'ph-text-align-justify', run: () => c().setTextAlign('justify').run(), on: editor.isActive({ textAlign: 'justify' }) },
        ],
        [
            { icon: 'ph-list-bullets', run: () => c().toggleBulletList().run(), on: editor.isActive('bulletList') },
            { icon: 'ph-list-numbers', run: () => c().toggleOrderedList().run(), on: editor.isActive('orderedList') },
        ],
        [
            { icon: 'ph-scissors', run: () => { editor.commands.focus(); document.execCommand('cut') } },
            { icon: 'ph-copy', run: () => { editor.commands.focus(); document.execCommand('copy') } },
        ],
        [
            { icon: 'ph-text-superscript', run: () => c().toggleSuperscript().run(), on: editor.isActive('superscript') },
            { icon: 'ph-text-subscript', run: () => c().toggleSubscript().run(), on: editor.isActive('subscript') },
        ],
    ]

    const addImage = (e) => {
        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = () => c().setImage({ src: reader.result }).run()
        reader.readAsDataURL(file)
        e.target.value = ''
    }

    return (
        <div className='borde border-border-20 rounded-2xl overflow-hidden'>
            {/* TOOLBAR */}
            <div className='flex items-center gap-6 flex-wrap p-3 border rounded-2xl border-border-20  mb-2 bg-bg'>
                {groups.map((g, gi) => (
                    <div key={gi} className='flex items-center gap-1'>
                        {g.map((t) => (
                            <button key={t.icon} type='button' onMouseDown={(e) => { e.preventDefault(); t.run() }} className={`w-8 h-8 flex items-center justify-center rounded-lg text-lg cursor-pointer transition-colors ${t.on ? 'bg-white text-accent border border-border-10' : 'text-blue-00 hover:bg-muted-bg '}`}>
                                <i className={`ph ${t.icon}`}></i>
                            </button>
                        ))}
                    </div>
                ))}

                <button type='button' onMouseDown={(e) => { e.preventDefault(); fileRef.current.click() }} className='w-8 h-8 flex items-center justify-center rounded-lg text-lg hover:bg-blue-50 cursor-pointer' >
                    <i className='ph ph-image'></i>
                </button>

                <input ref={fileRef} type='file' accept='image/*' hidden onChange={addImage} />
            </div>

            {/* EDITOR */}
            <EditorContent editor={editor} />
        </div>
    )
}

function Basic() {

    return (
        <div className='flex flex-col gap-6'>

            <div className=' border border-dashed p-6 rounded-2xl border-accent h- flex flex-col gap-6 bg-muted-bg'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex-1'>
                        <h1 className='px-1 text-sm mb-1'>Opportunity Title <span className='text-warn'>*</span></h1>
                        <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                    </div>
                    <div className='flex-1'>
                        <h1 className='px-1 text-sm mb-1'>Organisation Name <span className='text-warn'>*</span></h1>
                        <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                    </div>
                    <div className='flex-1'>
                        <h1 className='px-1 text-sm mb-1'>Opportunity Type <span className='text-warn'>*</span></h1>
                        <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                    </div>
                    <div className='flex-1'>
                        <h1 className='px-1 text-sm mb-1'>Company Website URL <span className='text-warn'>*</span></h1>
                        <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                    </div>
                </div>
            </div>

            <div className='w-full border-b border-border-10'></div>

            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='tracking-tight text-xl'>Overview</h1>
                    <p className='text-xs tracking-wide text-muted-text'>Include Rules, Eligibility, Process, Format, etc.</p>
                </div>

                <div className='borde border-dashed p- rounded-2xl border-accent h- flex flex-col gap-6 bg-muted-b px-20'>
                    <textarea className='h-50 outline-0 border border-accent p-3 bg-muted-bg px-4 text-sm border-dashed w-full rounded-2xl' placeholder='Enter Event, Compititions, Hackathon.....' />
                </div>

            </div>

            <div className='w-full border-t border-border-10'></div>

            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='tracking-tight text-xl'>Description</h1>
                    <p className='text-xs tracking-wide text-muted-text'>Include Rules, Eligibility, Process, Format, etc.</p>
                </div>

                <div className='borde border-dashed p- rounded-2xl border-accent h- flex flex-col gap-6 bg-muted-b p-6 bg-muted-bg border'>
                    <ToxEditer />
                </div>



            </div>

            <div className='w-full border-t border-border-10'></div>


            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='tracking-tight text-xl'>Opportunity Mode & Participation Type</h1>
                    <p className='text-xs tracking-wide text-muted-text'>Add important dates in this section like round start and end dates, Grand Finale date, etc. (max. 15)</p>
                </div>

                <div className='w-full px-20'>
                    <div className=' border border-accent rounded-2xl border-dashed bg-muted-bg p-6 flex flex-col gap-6'>
                        <div>
                            <p className='mb-2 text-sm'>Participation Type</p>
                            <div className='flex gap-4'>
                                <div className='cursor-pointer flex items-center justify-center gap-1 border rounded-xl text-sm bg-bg h-10 px-3 outline-0 border-accent/30 border-dashed'>
                                    <i className='ph ph-user text-'></i>
                                    <h1 className='px-1 text-xs'>Individual</h1>
                                </div>

                                <div className='cursor-pointer flex items-center justify-center gap-1 border rounded-xl text-sm bg-bg h-10 px-3 outline-0 border-accent/30 border-dashed'>
                                    <i className='ph ph-user text-'></i>
                                    <h1 className='px-1 text-xs'>Team Participation</h1>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='mb-2 text-sm'>Set team size</p>
                            <div className='grid grid-cols-2 gap-4 '>
                                <div className='cursor-text flex items-center justify-between border rounded-xl text-sm bg-bg h-10 outline-0 border-accent/30 border-dashed'>
                                    <h1 className='text-muted-text h-full flex items-center w-12 justify-center'>Min:</h1>
                                    <input type="number" placeholder='1' className='flex-1 outline-0 h-full' />
                                    <div className='flex flex-col items-center w-8 h-full text-muted-text justify-between py-1.5 text-xs borde'>
                                        <i className='ph ph-caret-up cursor-pointer'></i>
                                        <i className='ph ph-caret-down cursor-pointer'></i>
                                    </div>
                                </div>

                                <div className='cursor-text flex items-center justify-between border rounded-xl text-sm bg-bg h-10 outline-0 border-accent/30 border-dashed'>
                                    <h1 className='text-muted-text h-full flex items-center w-12 justify-center'>Max:</h1>
                                    <input type="number" placeholder='4' className='flex-1 outline-0 h-full' />
                                    <div className='flex flex-col items-center w-8 h-full text-muted-text justify-between py-1.5 text-xs borde'>
                                        <i className='ph ph-caret-up cursor-pointer'></i>
                                        <i className='ph ph-caret-down cursor-pointer'></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <p className='mb-2 text-sm'>Mode of Opportunity</p>
                            <div className='flex gap-4'>
                                <div className='cursor-pointer flex items-center justify-center gap-1 border rounded-xl text-sm bg-bg h-10 px-3 outline-0 border-accent/30 border-dashed'>
                                    <i className='ph ph-user text-'></i>
                                    <h1 className='px-1 text-xs'>Online</h1>
                                </div>

                                <div className='cursor-pointer flex items-center justify-center gap-1 border rounded-xl text-sm bg-bg h-10 px-3 outline-0 border-accent/30 border-dashed'>
                                    <i className='ph ph-user text-'></i>
                                    <h1 className='px-1 text-xs'>Offline</h1>
                                </div>

                                <div className='cursor-pointer flex items-center justify-center gap-1 border rounded-xl text-sm bg-bg h-10 px-3 outline-0 border-accent/30 border-dashed'>
                                    <i className='ph ph-user'></i>
                                    <h1 className='px-1 text-xs'>Hybrid</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function Rounds() {
    return (

        <div>

            <div className=' border border-dashed p-6 rounded-2xl border-accent h- flex flex-col gap-6 bg-muted-bg'>

                <div className='grid grid-cols-3 gap-6'>
                    <div className='flex-1'>
                        <h1 className='px-1 text-sm mb-1'>Round Name <span className='text-warn'>*</span></h1>
                        <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                    </div>

                    <div className='flex-1'>
                        <h1 className='px-1 text-sm mb-1'>Start <span className='text-warn'>*</span></h1>
                        <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                    </div>

                    <div className='flex-1'>
                        <h1 className='px-1 text-sm mb-1'>End <span className='text-warn'>*</span></h1>
                        <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='px-1 text-sm mb-1'>Round Name <span className='text-warn'>*</span></h1>
                    <textarea className='h-50 outline-0 border bg-bg border-accent/30 p-3 px-4 text-sm border-dashed w-full rounded-xl' placeholder='Enter Event, Compititions, Hackathon.....' />
                    <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                </div>
            </div>


            <div className='border border-border-10 p-4 rounded-2xl mt-4 bg-muted-bg'>
                <h1 className='font-bold text-xl'>Rounds</h1>

                <p className='text-sm text-muted-text leading-4 py-2 pb-6'>In this round, you'll take a structured online assessment consisting of multiple-choice and problem-solving questions. This evaluates your technical knowledge, analytical thinking, and job-relevant sk... Read more</p>

                <div className='flex items-center justify-between'>

                    <div className='text-xs text-muted-tet flex items-center gap-2'>
                        <i className='ph ph-calendar-blank'></i>
                        <p>05 Oct 26, 10:15 PM IST</p>
                        <i className='ph ph-arrow-right'></i>
                        <p>19 Oct 26, 10:15 PM IST</p>
                    </div>

                    <div className='flex gap-2'>
                        <i className='ph ph-pencil-simple'></i>
                        <i className='ph ph-trash-simple'></i>
                    </div>
                </div>

            </div>
        </div>


    )
}

function FAQs() {
    return (
        <div>
            <div className=' border border-dashed p-6 rounded-2xl border-accent h- flex flex-col gap-6 bg-muted-bg'>
                <div className='flex-1'>
                    <h1 className='px-1 text-sm mb-1'>Question <span className='text-warn'>*</span></h1>
                    <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                    <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                </div>


                <div className='flex-1'>
                    <h1 className='px-1 text-sm mb-1'>Answer <span className='text-warn'>*</span></h1>
                    <textarea className='h-50 outline-0 border bg-bg border-accent/30 p-3 px-4 text-sm border-dashed w-full rounded-xl' placeholder='Enter Event, Compititions, Hackathon.....' />
                    <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                </div>
            </div>

            <div className='border border-border-10 p-4 rounded-2xl mt-4 bg-muted-bg'>
                <div className=' flex mb-2 justify-between items-center'>
                    <h1 className='font-bold text-xl'>Rounds</h1>
                    <div className='flex gap-2'>
                        <i className='ph ph-pencil-simple'></i>
                        <i className='ph ph-trash-simple text-warn'></i>
                    </div>

                </div>
                <p className='text-sm text-muted-text leading-4'>In this round, you'll take a structured online assessment consisting of multiple-choice and problem-solving questions. This evaluates your technical knowledge, analytical thinking, and job-relevant sk... Read more</p>


            </div>
        </div>
    )
}

function AddInfo() {
    return (
        <div className='flex flex-col gap-8'>

            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='tracking-tight text-xl'>Contact Info</h1>
                        <p className='text-xs tracking-wide text-muted-text'>Add details of the person (name, email, and phone) to help candidates with queries during the process.</p>
                    </div>

                    <div className=' w-8 h-8 border bor rounded-full flex items-center justify-center bg-accent text-bg'>
                        <i className='ph ph-plus'></i>
                    </div>
                </div>

                <div className=' border border-dashed p-6 rounded-2xl border-accent h- flex flex-col gap-6 bg-muted-bg'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='flex-1'>
                            <h1 className='px-1 text-sm mb-1'>Name <span className='text-warn'>*</span></h1>
                            <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                            <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                        </div>
                        <div className='flex-1'>
                            <h1 className='px-1 text-sm mb-1'>Email <span className='text-warn'>*</span></h1>
                            <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                            <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                        </div>
                        <div className='flex-1'>
                            <h1 className='px-1 text-sm mb-1'>Mobile</h1>
                            <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                            <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full border-t border-border-10'></div>

            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='tracking-tight text-xl'>Important Dates</h1>
                        <p className='text-xs tracking-wide text-muted-text'>Add important dates in this section like round start and end dates, Grand Finale date, etc. (max. 15)</p>
                    </div>

                    <div className=' w-8 h-8 border bor rounded-full flex items-center justify-center bg-accent text-bg'>
                        <i className='ph ph-plus'></i>
                    </div>
                </div>

                <div className=' border border-dashed p-6 rounded-2xl border-accent h- flex flex-col gap-6 bg-muted-bg'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex-1'>
                            <h1 className='px-1 text-sm mb-1'>Date Title <span className='text-warn'>*</span></h1>
                            <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                            <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                        </div>
                        <div className='flex-1'>
                            <h1 className='px-1 text-sm mb-1'>Date <span className='text-warn'>*</span></h1>
                            <input type="text0" className={input} placeholder='Enter Event, Compititions, Hackathon.....' />
                            <p className='text-warn text-xs px-1 pt-0.5 hidden'>Minimum 3 characters in title is required</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full border-t border-border-10'></div>



            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='tracking-tight text-xl'>Attachments</h1>
                        <p className='text-xs tracking-wide text-muted-text'>Upload supporting documents for this Opportunity, such as instructions, additional guidelines or reference documents</p>
                    </div>

                    <div className=' w-8 h-8 border bor rounded-full flex items-center justify-center bg-accent text-bg'>
                        <i className='ph ph-plus'></i>
                    </div>
                </div>

                <div className=' border border-dashed p-4 rounded-2xl border-accent flex items-center justify-center bg-muted-bg cursor-pointer'>
                    <div className='flex items-center gap-1 text-accent'>
                        <i className='ph ph-paperclip'></i>
                        <h1 className='px-1 text-sm'>Browse file</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

/* ---------------- Section content (by heading) ---------------- */
function Section({ item }) {
    switch (item.head) {

        case 'Basic Details':
            return <Basic />

        case 'Rounds':
            return <Rounds />

        case 'Additional Info':
            return <AddInfo />

        case 'Frequently Asked Questions':
            return <FAQs />

        default:
            return typeof item.sub === 'string' && item.sub ? <div className='text-sm text-text/70'>{item.sub}</div> : null
    }
}

const bar = [
    {
        head: 'Basic Details',
        code: 'Basic',
        sub: 'Provide basic details about the opportunity, participation type, mode of event, who can participate, and what skills are required.'
    },
    {
        head: 'Rounds',
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
        sub: 'Set eligibility rules to ensure that only relevant candidates apply to the opportunity Who can register?'
    },
    {
        head: 'Dates & Deadlines',
        code: 'Dates & Deadlines',
        sub: 'Provide '
    },
    {
        head: 'Additional Info',
        code: 'Additional Info',
        sub: 'Manage additional details of your opportunity listing, including important dates, organizer contacts, documents, and gallery.'
    },
    {
        head: 'Frequently Asked Questions',
        code: 'FAQs',
        sub: 'Answer common questions candidates may have about this opportunity.'
    },
]

export default function Create() {
    const [active, setActive] = useState('Basic')
    const current = bar.find((b) => b.code === active)

    return (
        <div className="w-full flex flex-col items-center min-h-screen">

            {/* SECTIONS BAR */}
            <div className='border-y w-full border-border-10 flex items-center justify-center p-2 fixed top-16 z-99 left-1/2 -translate-x-1/2 backdrop-blur-xl h-12'>
                {bar.map((item) => {
                    const isActive = active === item.code
                    return (
                        <div key={item.code} onClick={() => { setActive(item.code); window.scrollTo({ top: 0 }) }}
                            className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration-200 p-2 px-3 rounded-xl'>
                            <h1 className={`relative cursor-pointer tracking-wide transition-colors text-sm ${isActive ? 'text-accent' : 'text-muted-text'}`}>{item.code}</h1>
                            <div className={`w-full bg-accent h-0.5 rounded-full absolute left-0 -bottom-1.5 origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                    )
                })}
                <div className=' p- flex items-center gap-2 ml-10'>
                    <h1 className='font-dot font-bold'>20%</h1>
                    <button className='bg-accent text-bg p-1 px-2 text-sm rounded-lg'>Live It</button>
                </div>
            </div>

            <div className="w-full max-w-7xl mt-30 flex flex-col items-center">
                <div className='relative w-5xl'>
                    <div key={current.code} className='flex flex-col gap-4 py-8'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='font-bold text-2xl'>{current.head}</h1>
                                <p className='text-sm text-muted-text'>{current.sub}</p>
                            </div>

                            {current.head === 'Rounds' && (
                                <div className='rounded-full flex items-center justify-center p-2 gap-2 px-3 cursor-pointer h-8 bg-accent text-bg'>
                                    <i className='ph ph-plus text-bg'></i>
                                    <p className='text-sm'>Add Rounds</p>
                                </div>
                            )}
                        </div>

                        <div className='px'>
                            <Section item={current} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}