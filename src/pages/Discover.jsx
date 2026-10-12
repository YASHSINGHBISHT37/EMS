import React, { useState } from 'react'

const events = [
  {
    id: 1,
    title: 'Vortexa 3.0 12-Hour Hackathon',
    org: 'Dr. D.Y. Patil Institute of Technology, Pune',
    type: 'Hackathon',
    mode: 'Offline',
    team: '2-4 members',
    prize: '₹75,000',
    deadline: '08 Oct 26',
    theme: '#960D5B',
    tags: ['AI/ML', 'Web', 'App'],
  },
  {
    id: 2,
    title: 'Build with AI: Code for Communities',
    org: 'Google Cloud India',
    type: 'Hackathon',
    mode: 'Online',
    team: '1-4 members',
    prize: '₹5,00,000',
    deadline: '25 Oct 26',
    theme: '#1D4ED8',
    tags: ['GenAI', 'Cloud', 'Social Good'],
  },
  {
    id: 3,
    title: 'CodeSprint Coding Championship',
    org: 'IIT Delhi Tech Fest',
    type: 'Competition',
    mode: 'Hybrid',
    team: 'Individual',
    prize: '₹1,00,000',
    deadline: '30 Oct 26',
    theme: '#047857',
    tags: ['DSA', 'Competitive Programming'],
  },
  {
    id: 4,
    title: 'UI/UX Design Showdown',
    org: 'Design Club, GGSIPU',
    type: 'Competition',
    mode: 'Online',
    team: '1-2 Memebers',
    prize: '₹25,000',
    deadline: '15 Nov 26',
    theme: '#B45309',
    tags: ['Figma', 'Product Design'],
  },
]

const modes = ['All', 'Online', 'Offline', 'Hybrid']
const types = ['All', 'Hackathon', 'Competition']
const teams = ['All', 'Individual', 'Team']

function Chips({ options, value, onChange }) {
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((o) => (
        <button
          key={o}
          type='button'
          onClick={() => onChange(o)}
          className={`px-3 h-8 rounded-xl text-xs border transition-colors cursor-pointer ${value === o
            ? 'bg-accent text-bg border-accent'
            : 'border-border-10 text-muted-text hover:bg-bg'
            }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

function Filter({ title, children }) {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='font-bold text-muted-text text-sm'>{title}</h1>
      {children}
    </div>
  )
}

export default function Discover() {
  const [mode, setMode] = useState('All')
  const [type, setType] = useState('All')
  const [team, setTeam] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = events.filter((e) => {
    const isSolo = e.team === 'Individual'
    return (
      (mode === 'All' || e.mode === mode) &&
      (type === 'All' || e.type === type) &&
      (team === 'All' || (team === 'Individual' ? isSolo : !isSolo)) &&
      (e.title + e.org + e.tags.join(' ')).toLowerCase().includes(search.toLowerCase())
    )
  })

  const reset = () => { setMode('All'); setType('All'); setTeam('All'); setSearch('') }

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-full max-w-7xl mt-20 flex flex-col gap-6 items-center min-h-screen'>

        {/* FILTERS */}
        {/* <div className='sticky top-24 border w-80 shrink-0 rounded-3xl bg-muted-bg border-border-10 p-4 flex flex-col gap-5'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search events...'
            className='w-full border border-border-10 rounded-xl text-sm bg-bg h-10 px-4 outline-0'
          />

          <Filter title='Mode'><Chips options={modes} value={mode} onChange={setMode} /></Filter>
          <Filter title='Type'><Chips options={types} value={type} onChange={setType} /></Filter>
          <Filter title='Participation'><Chips options={teams} value={team} onChange={setTeam} /></Filter>

          <button type='button' onClick={reset} className='text-xs text-accent w-fit cursor-pointer'>
            Reset filters
          </button>
        </div> */}

        <div className=' border border-border-10 rounded-full p-1 w-5xl bg-muted-bg'>
          <input type="text" />
        </div>

        {/* <div></div> */}

        {/* EVENTS */}
        <div className='grid grid-cols-2 gap-6'>
          {events.map((item, i) => (
            <div key={i} className='border border-border-10 bg-muted-bg rounded-2xl overflow-clip'>

              {/* IMAGE */}
              <div className='relative w-full h-40'>
                <img src="banner.webp" className='w-full h-full object-cover' />
                <span className='absolute top-2 left-2 bg-bg/70 backdrop-blur-xs text-xs px-3 py-1 rounded-xl border border-border-10'>{item.type}</span>
                <span className='absolute top-2 right-2 bg-bg/70 backdrop-blur-xs text-xs px-3 py-1 rounded-xl border border-border-10'>{item.mode}</span>
                <img src="1.avif" className='w-24 aspect-square rounded-2xl border-6 border-[#EFF0F1] object-cover absolute right-2 -bottom-10' />
              </div>

              <div className='p-4 py-3 pb-2 flex flex-col gap-3'>
                {/* TITLE */}
                <div>
                  <h1 className='text-xl font-bold tracking-tight w-xs leading-6 mb-0.5'>{item.title}</h1>
                  <p className='text-xs tracking-wide text-muted-text'>{item.org}</p>
                </div>

                {/* TAGS */}
                <div className='flex flex-wrap gap-2'>
                  {item.tags.map((t) => (
                    <span key={t} className='text-xs tracking-wide border border-dashed border-accent/50 rounded-lg px-2.5 py-1 bg-bg'>{t}</span>
                  ))}
                </div>

                {/* BOTTOM */}
                <div className='pt-3 border-t border-border-10 flex flex-col gap-2 text-xs'>
                  <div className='text-muted-text grid grid-cols-1 gap-1'>
                    <p className='flex items-center gap-1.5'><i className='ph ph-users text-md border rounded-md p-1 text-text bg-bg border-border-10'></i>{item.team}</p>
                    <p className='flex items-center gap-1.5'><i className='ph ph-map-pin text-md border rounded-md p-1 text-text bg-bg border-border-10'></i>{item.org}</p>
                  </div>

                  <div className='flex items-center pt-2 justify-between'>
                    <div>
                      <span className='text-accent'>Posted Oct 12,2026</span>
                    </div>

                    <div className='flex items-center gap-3 justify-end'>
                      <div className=''>
                        <h1>8 days left</h1>
                      </div>

                      <div className='border rounded-full p-1 px-3 text-xs bg-accent text-bg'>
                        <h1>Register</h1>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}