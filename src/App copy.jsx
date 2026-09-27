import React from 'react'

export default function App() {
  return (
    <div className='w-screen h-screen relative p-2 px-50 flex gap-2'>
      {/* <div className='bg-transparent bg-linear-to-b to-black from-blue-500 absolute top-0 left-0 w-full h-full'></div> */}
      <div className='w-90 h-full bg-muted-bg border border-border-20 rounded-2xl p-2'>sd</div>
      <div className='w-full h-full bg-muted-bg border border-border-20 rounded-2xl p-4'>

        <div className='border border-border-20 bg-white rounded-4xl h-60 p-1.5 w-2xl'>
          <div className='border border-border-20 bg-bg rounded-4xl h-full p-2 flex gap-2'>
            <div className='w-18 h-18 rounded-full bg-black'></div>

            <div>
              <div className=''>
                <h1 className='font-bold text-2xl'>CodeSlayer 2.0 2k26</h1>
                <h1 className='text-sm text-muted-text'>National Institute of Technology (NIT), Delhi</h1>
              </div>

              <div className='text-sm flex items-center'>
                <p className='text-muted-text'>Deadline: </p>
                <p className='text-text'>29 Sep 2026</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
