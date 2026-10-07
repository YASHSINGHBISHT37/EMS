import React, { useState, useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Image from '@tiptap/extension-image'

function RichEditor() {
    const fileRef = useRef(null)

    const editor = useEditor({
        extensions: [
            StarterKit,
            Superscript,
            Subscript,
            Image,
            TextAlign.configure({ types: ['paragraph', 'heading'] }),
        ],
        shouldRerenderOnTransaction: true,
        editorProps: {
            attributes: {
                class: 'h-100 max-h-120 overflow-y-auto p-4 text-sm outline-none [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2',
            },
        },
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
        <div className='border border-border-20 rounded-2xl overflow-hidden bg-muted-bg'>
            {/* TOOLBAR */}
            <div className='flex items-center gap-4 flex-wrap p-2 px-4 border-b border-border-20'>
                {groups.map((g, gi) => (
                    <div key={gi} className='flex items-center gap-1'>
                        {g.map((t) => (
                            <button key={t.icon} type='button' onMouseDown={(e) => { e.preventDefault(); t.run() }} className={`w-8 h-8 flex items-center justify-center rounded-lg text-lg cursor-pointer transition-colors ${t.on ? 'bg-blue-100 text-blue-600' : 'text-blue-00 hover:bg-blue-50'}`}>
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

export default function Blog() {
    const [active, setActive] = useState('Basics')
    const tabs = ['Basics', 'Rounds', 'Prizes', 'Banner', 'Review', 'FAQs']

    const form = [
        { title: 'Title (you can change this later)', placeholder: 'Please enter the name of your hackathon.', required: true, hint: 'Max 200 characters' },
        { title: 'Organiser Name', placeholder: 'Enter organiser name', required: true, hint: 'Max 100 characters' },
        { title: 'Organiser Website URL', placeholder: 'https://  Organiser Website URL', required: false, hint: '' },
        { title: 'Contact Email', placeholder: 'Enter contact email', required: false, hint: '' },
    ]

    const bannerColor = ['#4D9DEE', '#0073E6', '#005CB8', '#00458A', '#4F36C5', '#3C2996', , '#291B69', '#8B00FF']
    function Rounds() {
        return (
            <div className='w-full flex flex-col gap-2'>

                {/* HEADING */}
                <div className='mb-6'>
                    <h1 className='tracking-tight font-bold text-3xl'>{active}</h1>
                    <p className='text-muted-text text-sm leading-4.5'>Define each stage of your Hiring Funnel. Arrange them in a sequence to clearly define the hiring process.</p>
                </div>

                {/* MAIN */}
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4 w-full px-8 flex-col'>

                        <div className='w-full h-60 flex items-center border border-blue-600 text-center bg-blue-50/40 p-2.5 px-4 rounded-xl cursor-pointer border-dashed flex-col justify-center'>
                            <i className='ph ph-path text-2xl'></i>
                            <h1 className='text-sm '>No round added yet</h1>
                            <p className='text-sm leading-4'>Please click on the "Add Round" button to create a round.</p>

                            <div className='flex items-center justify-center gap-2 border rounded-full border-border-10 p-2 px-4 bg-accent text-bg mt-5'>
                                <i className='ph ph-plus'></i>
                                <h1 className='text-sm'>Add Screening Round</h1>
                            </div>
                        </div>

                        <div className='border border-border-10 rounded-2xl bg-muted-bg h-40 w-full flex flex-col justify-between p-4 px-5'>


                            <div className=''>
                                <h1 className=' tracking-tight text-2xl font-bold'>Assignment</h1>
                                <p className='text-sm text-muted-text'>sdhj sjadSHAd jsahdhSA jSHDhgSA jSDH</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <i className="ph ph-calendar-blank mr-2"></i>
                                    <p className='text-xs'>05 Oct 26, 10:15 PM IST</p>
                                    <i className="ph ph-arrow-right mx-2"></i>
                                    <p className='text-xs'>05 Oct 26, 10:15 PM IST</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <i className="ph ph-pencil-simple"></i>
                                    <i className="ph ph-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    function Banner() {
        return (
            <div className='w-full flex flex-col gap-2'>

                {/* HEADING */}
                <div className='mb-6'>
                    <h1 className='tracking-tight font-bold text-3xl'>Banner / Theme</h1>
                    <p className='text-muted-text text-sm leading-4.5'>Default banners will be applied if no custom desktop or mobile banners are uploaded. You can update them anytime and choose from available color themes.</p>
                </div>

                {/* MAIN */}
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4 w-full'>
                        <div className='w-full h-full'>
                            <div className='flex items-center justify-between mb-2 px-1'>
                                <h1 className='tracking-tight text-sm'>Banner for Web / Thumbnail</h1>
                                <h1 className='text-xs text-muted-text'>1920x557</h1>
                            </div>
                            <div className='w-full h-60 flex items-center border border-blue-600 text-center bg-blue-50/40 p-2.5 px-4 rounded-xl cursor-pointer border-dashed flex-col justify-center'>
                                <h1 className='text-accent tracking-tight font-bold'>Choose file</h1>
                                <p className='text-xs text-muted-text'>Recommended image resolution 1920x557</p>
                            </div>
                        </div>

                        <div className='w- h-full'>
                            <div className='flex items-center justify-between px-1 mb-2'>
                                <h1 className='tracking-tight text-sm'>Logo</h1>
                                <h1 className='text-xs text-muted-text'>400x400</h1>
                            </div>
                            <div className='w-60 h-60 flex items-center border border-blue-600 bg-blue-50/40 p-2.5 px-4 rounded-xl cursor-pointer border-dashed justify-center flex-col text-center'>
                                <h1 className='text-accent tracking-tight font-bold'>Choose file</h1>
                                <p className='text-xs text-muted-text'>Recommended image resolution 1920x557</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='text-sm'>Theme Color</p>
                        <div className='flex gap-3'>
                            {bannerColor.map((item, i) => (
                                <div style={{ background: item }} className={`border rounded-full w-9 h-9 cursor-pointer border-border-10`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function FAQs() {
        return (
            <div className='w-full flex flex-col gap-2'>

                {/* HEADING */}
                <div className='mb-6'>
                    <h1 className='tracking-tight font-bold text-3xl'>Frequently Ask Questions</h1>
                    <p className='text-muted-text text-sm leading-4.5'>Define each stage of your Hiring Funnel. Arrange them in a sequence to clearly define the hiring process.</p>
                </div>

                {/* MAIN */}
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4 w-full px-8 flex-col'>

                        <div className='w-full h-60 flex items-center border border-blue-600 text-center bg-blue-50/40 p-2.5 px-4 rounded-xl cursor-pointer border-dashed flex-col justify-center'>
                            <i className='ph ph-path text-2xl'></i>
                            <h1 className='text-sm '>No round added yet</h1>
                            <p className='text-sm leading-4'>Please click on the "Add Round" button to create a round.</p>

                            <div className='flex items-center justify-center gap-2 border rounded-full border-border-10 p-2 px-4 bg-accent text-bg mt-5'>
                                <i className='ph ph-plus'></i>
                                <h1 className='text-sm'>Add Screening Round</h1>
                            </div>
                        </div>

                        <div className='border border-border-10 rounded-2xl bg-muted-bg h-40 w-full flex flex-col justify-between p-4 px-5'>


                            <div className=''>
                                <h1 className=' tracking-tight text-2xl font-bold'>Assignment</h1>
                                <p className='text-sm text-muted-text'>sdhj sjadSHAd jsahdhSA jSHDhgSA jSDH</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <i className="ph ph-calendar-blank mr-2"></i>
                                    <p className='text-xs'>05 Oct 26, 10:15 PM IST</p>
                                    <i className="ph ph-arrow-right mx-2"></i>
                                    <p className='text-xs'>05 Oct 26, 10:15 PM IST</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <i className="ph ph-pencil-simple"></i>
                                    <i className="ph ph-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className='relative flex flex-col items-center'>
            {/* SECTIONS BAR */}
            <div className='flex justify-center sticky w-full top-2 z-99 left-0 gap-2'>
                <div className='flex items-center border border-border-10 rounded-4xl bg-muted-bg p-1.5  backdrop-blur-xl gap-1'>
                    {tabs.map((item) => {
                        const isActive = active === item
                        return (
                            <div
                                key={item}
                                onClick={() => setActive(item)}
                                className='relative group cursor-pointer hover:bg-muted-bg transition-all ease-in-out duration-200 p-1.5 px-3 rounded-full'>
                                <h1 className={`relative transition-colors text-sm ${isActive ? 'text-bg' : 'text-muted-text'}`}>{item}</h1>
                                <div className={`w-full h-full rounded-full bg-accent absolute left-1/2 top-1/2 -z-1 -translate-x-1/2 -translate-y-1/2 origin-center transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                            </div>
                        )
                    })}
                </div>

                <div className='border flex items-center border-border-10 rounded-full p-1 gap-3 pl-4 bg-muted-bg backdrop-blur-xl'>
                    <h1 className='font-bold tracking-tight'>100%</h1>
                    <div className='h-full px-3 flex items-center justify-center bg-accent text-bg text-sm border border-border-10 rounded-full'>Complete</div>
                </div>
            </div>

            {/* MAIN */}
            <div className='flex w-4xl mt-8 gap-4'>

                {/* SIDEBAR STEPS */}
                {/* <div className='w-80 shrink-0 flex flex-col items-start justify-start borde border-border-10 p-6 rounded-3xl h-fit bg-muted-b relative'> */}
                {/* <div className=' border w-full border-border-10 p-4 rounded-3xl h-80'></div> */}

                {/* {tabs.map((item, i) => (
                            <div key={item} className='flex gap-3'>

                                <div className='flex flex-col items-center'>
                                    <div className='rounded-full w-10 h-10 flex items-center justify-center bg-blue-100 border border-border-10 shrink-0'>
                                        <div className='flex items-center justify-center w-8 h-8 bg-accent rounded-full'>
                                            <h1 className='text-sm text-bg'>{i + 1}</h1>
                                        </div>
                                    </div>

                                    {i !== tabs.length - 1 && (
                                        <div className='h-4 border-l-2 border-dotted border-blue-400 my-1'></div>
                                    )}
                                </div>

                                <div className='pt-0.5'>
                                    <h1 className='text-xs text-muted-text'>Step {i + 1}</h1>
                                    <p className='text-sm tracking-tight'>{item}</p>
                                </div>

                            </div>
                        ))} */}
                {/* </div> */}

                {/* BASICS */}
                {active === 'Basics' && (
                    <div className='flex gap-8 w-full flex-col'>

                        {/* BASICS */}
                        <div className='w-full flex flex-col gap-2 b'>
                            <div className='px-2'>
                                <h1 className='tracking-tight font-bold text-2xl'>{active} Details</h1>
                                <p className='text-muted-text text-xs'>Provide basic details about the opportunity, participation type, mode of event, who can participate, and what skills are required.</p>
                            </div>

                            <div className='border border-border-10 p-4 rounded-3xl bg-muted-bg'>
                                <div>
                                    <img src='banner.webp' className='w-full rounded-3xl h-70 object-cover' />
                                    <p className='text-xs text-muted-text text-right mt-1 px-8'>Supported banner image JPG, JPEG, or PNG. Max 1 MB</p>
                                </div>

                                <div className='flex gap-4 w-full'>
                                    <div className='w-26 h-26 border border-border-10 rounded-xl shrink-0'>
                                        <img src='banner.webp' className='rounded-xl w-full h-full object-cover' />
                                    </div>

                                    <div className='grid grid-cols-2 gap-4 flex-1'>
                                        {form.map((f) => (
                                            <div key={f.title} className='flex flex-col gap-1'>
                                                <h1 className='text-sm px-2 mb-1'>{f.title}{f.required && <span className='text-red-700'>*</span>}</h1>
                                                <input
                                                    className='w-full text-sm bg-muted-bg outline-none focus:outline-2 focus:outline-blue-600 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-3' type='text' placeholder={f.placeholder} />
                                                {f.hint && <p className='text-xs text-muted-text px-4 text-right leading-3'>{f.hint}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ABOUT */}
                        <div className='w-full flex flex-col gap-2'>
                            <div className='px-2'>
                                <h1 className='tracking-tight font-bold text-2xl'>About</h1>
                                <p className='text-muted-text text-xs'>Include Rules, Eligibility, Process, Format, etc.</p>
                            </div>

                            <div className='border border-border-10 p-4 rounded-3xl'>
                                <RichEditor />
                            </div>
                        </div>

                        {/*  Participation Type */}
                        <div className='w-full flex flex-col gap-2'>
                            <div className='px-2'>
                                <h1 className='tracking-tight font-bold text-2xl'>Opportunity Mode & Participation Type</h1>
                                <p className='text-muted-text text-xs'>Include Rules, Eligibility, Process, Format, etc.</p>
                            </div>

                            <div className='border border-border-10 p-4 rounded-3xl flex flex-col gap-3 bg-muted-bg'>
                                <div>
                                    <h1 className='font-bold tracking-tight mb-1 px-2'>Participation Type</h1>

                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center border-2 border-border-10 bg-muted-bg p-2.5 px-4 rounded-2xl cursor-pointer gap-2 border-dotted'>
                                            <i className='ph ph-user text-lg'></i>
                                            <p className='text-sm tracking-tight'>Individual</p>
                                        </div>

                                        <div className='flex items-center border-2 border-border-10 bg-muted-bg p-2.5 px-4 rounded-2xl cursor-pointer gap-2 border-dotted'>
                                            <i className='ph ph-users-four text-lg'></i>
                                            <p className='text-sm tracking-tight'>Team Participation</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center w-full gap-4'>
                                    <div className='flex flex-col w-full'>
                                        <h1 className='text-sm px-2 mb-1 tracking-tight'>Set team size</h1>
                                        <input className='w-full text-sm bg-muted-bg outline-none focus:outline-2 focus:outline-blue-600 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-3' type='text' placeholder='Enter address of the location where opportunity will be held' />
                                    </div>

                                    <div className='flex flex-col w-full'>
                                        <h1 className='text-sm px-2 mb-1 tracking-tight'></h1>
                                        <input className='w-full text-sm bg-muted-bg outline-none focus:outline-2 focus:outline-blue-600 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-3' type='text' placeholder='Select Location' />
                                    </div>
                                </div>

                                <div>
                                    <h1 className='font-bold tracking-tight mb-1 px-2'>Mode of Opportunity</h1>

                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center border-2 border-border-10 bg-muted-bg p-2.5 px-4 rounded-2xl cursor-pointer gap-2 border-dotted'>
                                            <i className='ph ph-globe-hemisphere-east text-lg'></i>
                                            <p className='text-sm tracking-tight'>Online</p>
                                        </div>

                                        <div className='flex items-center border-2 border-border-10 bg-muted-bg p-2.5 px-4 rounded-2xl cursor-pointer gap-2 border-dotted'>
                                            <i className='ph ph-map-pin text-lg'></i>
                                            <p className='text-sm tracking-tight'>Offline</p>
                                        </div>

                                        <div className='flex items-center border-2 border-border-10 bg-muted-bg p-2.5 px-4 rounded-2xl cursor-pointer gap-2 border-dotted'>
                                            <i className='ph ph-users-four text-lg'></i>
                                            <p className='text-sm tracking-tight'>Hybrid</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center w-full gap-4'>
                                    <div className='flex flex-col w-full'>
                                        <h1 className='text-sm px-2 mb-1 tracking-tight'>Venue of the Event</h1>
                                        <input className='w-full text-sm bg-muted-bg outline-none focus:outline-2 focus:outline-blue-600 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-3' type='text' placeholder='Enter address of the location where opportunity will be held' />
                                    </div>

                                    <div className='flex flex-col w-full'>
                                        <h1 className='text-sm px-2 mb-1 tracking-tight'>Event Location</h1>
                                        <input className='w-full text-sm bg-muted-bg outline-none focus:outline-2 focus:outline-blue-600 hover:border-border-20 transition-all ease-in-out duration-200 border border-border-10 rounded-xl p-2 px-3' type='text' placeholder='Select Location' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* Rounds */}
                {active === 'Rounds' && (
                    <Rounds />
                )}

                {/* BANNER/ THEME */}
                {active === 'Banner' && (
                    <Banner />
                )}

                 {/* BANNER/ THEME */}
                 {active === 'FAQs' && (
                    <FAQs />
                )}



                {active === 'Prizes' && (
                    <div className='w-full flex flex-col gap-2'>
                        <div className='px-2'>
                            <h1 className='font-bold text-2xl'>{active}</h1>
                            <p className='text-muted-text text-xs'>Mention awards and prizes, perks and other important details for this opportunity.</p>
                        </div>

                        <div className='px-2'>
                            <h1 className='font-bold text-2xl'>Add Prizes</h1>
                            <p className='text-muted-text text-xs'>Create prizes and seamlessly send participation or winning certificates via Unstop after your opportunity ends.</p>
                        </div>

                        <div className='border-2 border-accent bg-muted-bg rounded-2xl border-dotted h-60'>

                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='border border-border-10 rounded-2xl p-2 flex gap-4 justify-between w-full'>
                                <div className='flex gap-4 items-center justify-center'>
                                    <div className='bg-muted-bg rounded-2xl aspect-square w-26 flex items-center justify-center border border-border-10'>
                                        <h1 className='text-accent font-bold text-4xl tracking-tighter'>Cash</h1>
                                    </div>

                                    <div>
                                        <h1 className='text-2xl font-bold tracking-tight'>$1000</h1>
                                        <p className='text-sm mt-2'>2nd Position</p>
                                        <p className='text-xs text-muted-text'>First Rank Holder.</p>
                                    </div>
                                </div>
                                <i className="ph ph-dots-three-outline-vertical pt-2"></i>
                            </div>

                            <div className='border border-border-10 rounded-2xl p-2 flex gap-4 justify-between w-full'>
                                <div className='flex gap-4 items-center justify-center'>
                                    <div className='bg-muted-bg rounded-2xl aspect-square w-26 flex items-center justify-center border border-border-10'>
                                        <h1 className='text-accent font-bold text-xl tracking-tighter'>Certificate</h1>
                                    </div>

                                    <div>
                                        <h1 className='text-2xl font-bold tracking-tight'>$1000</h1>
                                        <p className='text-sm mt-2'>2nd Position</p>
                                        <p className='text-xs text-muted-text'>First Rank Holder.</p>
                                    </div>
                                </div>
                                <i className="ph ph-dots-three-outline-vertical pt-2"></i>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}