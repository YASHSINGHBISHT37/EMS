import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
    const footerLinks = [
        {
            header: "Navigation",
            links: [
                { name: "Home", href: "/" },
                { name: "IPU Result", href: "/ipu-result" },
                { name: "Leaderboard", href: "/leaderboard" },
                { name: "Study Resources", href: "/study-resources" },
            ],
        },
        {
            header: "Support",
            links: [
                { name: "Contact", href: "/Contact" },
                { name: "About Us", href: "/About" },
                { name: "Privacy Policy", href: "/Privacy" },
                { name: "Terms of Service", href: "/Terms" },
            ],
        },
        {
            header: "Connect",
            links: [
                { name: "Email", href: "mailto:yashbisht0007@gmail.com" },
                { name: "Github", href: "https://github.com/yourusername" },
                { name: "Linkedin", href: "https://linkedin.com/in/yourusername" },
                { name: "Instagram", href: "https://instagram.com/yourusername" },
            ],
        },
    ]

    return (
        <div className='w-full flex rounded-t-4xl bg-muted-bg flex-col items-center justify-center border-t border-border-10 mt-4'>
            <div className='w-7xl flex flex-col gap-30 pt-10 pb-4'>

                <div className="flex justify-end w-full gap-30 text-right">
                    <div className="flex gap-20">
                        {footerLinks.map((item, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <h1 className="font-bold text-xl">{item.header}</h1>
                                <div className="flex flex-col text-text/70">
                                    {item.links.map((link, j) => (
                                        <Link key={j} to={link.href} className="cursor-pointer pointer-events-auto leading-5.5">{link.name}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex">
                    <h1 className="text-[26vh] font-dot tracking-tight leading-60 font-bold bg-linear-to-tr from-text via-accent to-text bg-clip-text text-transparent">SquareOne.</h1>
                    <span className="text-5xl text-accent">®</span>
                </div>
            </div>

            <div className='border-t border-border-10 h-14 w-full flex items-center justify-center'>
                <div className='w-7xl flex items-center justify-between h-full text-right text-text/70 text-sm'>
                    <div className='flex items-center gap-5'>
                        <p>Cookie Policy</p>
                        <p>Terms</p>
                        <p className=''>Privacy Policy</p>
                    </div>
                    <p>©2026 SquareOne All rights Reserved.</p>
                </div>
            </div>

        </div>
    )
}
