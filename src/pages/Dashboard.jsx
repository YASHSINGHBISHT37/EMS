import React from 'react'

export default function Dashboard() {
    const f = [1, 2, 3, 4]
    const head =['S.no','Title','Type','Applied', ]
    return (
        <div className='p-4 border border-border-10 rounded-3xl min-h-screen bg-muted-bg'>

            <div>
                <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
                <p className='text-muted-text text-sm'>Here is the summary of overall performance</p>
            </div>

            <div className='grid grid-cols-4 items-center gap-4'>
                {f.map((item, i) => (
                    <div className='border border-border-10 rounded-2xl p-4 h-40'></div>
                ))}
            </div>

            <div className='border border-border-10 rounded-3xl h-40'>

                <div>
                    <h1>S.no</h1>
                </div>
            </div>
        </div>
    )
}
