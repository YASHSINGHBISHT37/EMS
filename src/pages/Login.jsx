import React from 'react'

export default function Login() {
    return (
        <div className='w-full h-full flex items-center justify-center'>

            <div className='w-100 border p-4 flex flex-col items-center gap-3'>
                <div className='w-full border border-border-10 flex items-center justify-center gap-3 rounded-xl p-2.5'>
                    <i className='ph ph-google'></i>
                    <h1 className='tracking-tight text-sm'>Continue with Google</h1>
                </div>

                <div className='flex w-full border p-0.5 border-border-10 rounded-xl gap-1 bg-muted-bg'>
                    <div className='w-full border border-border-10 bg-text flex items-center justify-center gap-3 rounded-xl p-2.5'>
                        <i className='ph ph-google'></i>
                        <h1 className='tracking-tight text-sm text-bg'>Password</h1>
                    </div>

                    <div className='w-full flex items-center justify-center gap-3 rounded-xl p-2.5'>
                        <i className='ph ph-google'></i>
                        <h1 className='tracking-tight text-sm'>Login with OTP</h1>
                    </div>
                </div>

                <div className='w-full border border-border-10 bg-text flex items-center justify-center gap-3 rounded-xl p-2.5'>
                    <i className='ph ph-google'></i>
                    <h1 className='tracking-tight text-sm text-bg'>Sign In</h1>
                </div>

                <p>Don't have an account? Sign up</p>
            </div>
        </div>
    )
}
