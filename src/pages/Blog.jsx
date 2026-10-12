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
    team: '1-2 members',
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
          className={`px-3 h-8 rounded-xl text-xs border transition-colors cursor-pointer ${
            value === o
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

function EventCard({ e }) {
  return (
    <div className='border border-border-10 rounded-2xl overflow-hidden bg-muted-bg flex flex-col hover:-translate-y-1 transition-transform duration-200 cursor-pointer'>
      <div className='h-50 relative' style={{ background: `linear-gradient(135deg, ${e.theme}, ${e.theme}99)` }}>
        <span className='absolute top-3 left-3 bg-bg/90 text-xs px-3 py-1 rounded-lg'>{e.type}</span>
        <span className='absolute top-3 right-3 bg-bg/90 text-xs px-3 py-1 rounded-lg'>{e.mode}</span>
      </div>

      <div className='p-4 flex flex-col gap-3 flex-1'>
        <div>
          <h2 className='font-bold leading-5'>{e.title}</h2>
          <p className='text-xs text-muted-text mt-1'>{e.org}</p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {e.tags.map((t) => (
            <span key={t} className='text-xs border border-dashed border-accent/40 rounded-lg px-2 py-0.5'>{t}</span>
          ))}
        </div>

        <div className='mt-auto pt-3 border-t border-border-10 grid grid-cols-3 gap-2 text-xs text-muted-text'>
          <p className='flex items-center gap-1'><i className='ph ph-users'></i>{e.team}</p>
          <p className='flex items-center gap-1'><i className='ph ph-trophy'></i>{e.prize}</p>
          <p className='flex items-center gap-1'><i className='ph ph-calendar-blank'></i>{e.deadline}</p>
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
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
      <div className='w-full max-w-7xl mt-20 flex gap-10 items-start min-h-screen'>

        {/* FILTERS */}
        <div className='sticky top-24 border w-70 shrink-0 rounded-3xl bg-muted-bg border-border-10 p-4 flex flex-col gap-5'>
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
        </div>

        {/* EVENTS */}
        <div className='flex-1'>
          <p className='text-sm text-muted-text mb-4'>{filtered.length} opportunities found</p>

          {filtered.length ? (
            <div className='grid grid-cols-2 gap-6'>
              {filtered.map((e) => <EventCard key={e.id} e={e} />)}
            </div>
          ) : (
            <div className='border border-dashed border-accent/40 rounded-3xl p-10 text-center text-sm text-muted-text'>
              Koi event nahi mila. Filters reset karke dekho.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}