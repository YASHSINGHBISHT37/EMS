import React from 'react'

export default function Login() {
    const l = [
        { icon: '', name: 'Google' },
        { icon: '', name: 'Github' },
        { icon: '', name: 'Linkdin' },
    ]
    return (
        <div className='w-full h-full flex flex-col items-center justify-center z-999999999999999 fixed bg-bg'>
            <i className='ph ph-x absolute top-4 right-4 text-xl cursor-pointer'></i>
            <div className="flex">
                <h1 className="text-9xl font-dot tracking-tight font-bold bg-linear-to-tr from-text via-accent to-text bg-clip-text text-transparent">SquareOne</h1>
                <span className="text-4xl text-accent">®</span>
            </div>
            <p className='text-text/70 mb-20'>Your Next Opportunity Starts Here</p>



            <div className='w-md flex flex-col gap-4'>

                {/* Email */}
                <div className='flex flex-col gap-8'>
                    <div>
                        <h1 className='px-1 text-sm mb-1'>Email <span className='text-warn'>*</span></h1>
                        <input type="email" className='border border-accent rounded-xl bg-muted-bg/50 text-sm px-4 w-full border-dashed h-12' placeholder='Enter Email' />
                        <div className='flex items-center justify-end mt-1 gap-1 w-full'>
                            <p className='text-xs text-muted-text'>Already have an account?</p>
                            <p className='text-xs text-accent font-bold cursor-pointer'>Login</p>
                        </div>
                    </div>

                    <div className='border flex items-center justify-center rounded-full bg-accent text-bg h-12'>
                        <h1 className='text-'>Continue with OTP</h1>
                    </div>
                </div>

                <div className='flex w-full relative items-center justify-center'>
                    <div className='border-t w-full absolute top-1/2 border-border-10'></div>
                    <p className='text-sm text-muted-text bg-bg z-1 text-center w-10'>OR</p>
                </div>

                {/* Login With */}
                <div className='flex flex-col gap-3'>
                    {l.map((item, i) => (
                        <div className='border border-border-10 rounded-full text-sm px-4 w-full border- h-12 flex items-center gap-2 justify-center bg-muted-bg/50'>
                            <i className={`ph ph-google-logo text-lg`}></i>
                            <p className='text-'>Continue with {item.name}</p>
                        </div>
                    ))}
                    <p className='text-xs text-muted-text mt-2 px-1 leading-4.5'>By signing in, you accept the <span className='text-accent'>terms of service</span> and acknowledge our <span className='text-accent'>privacy policy</span>.</p>

                </div>





            </div>

        </div>
    )
}
