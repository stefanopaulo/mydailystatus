import React from 'react'
import NavBar from './NavBar'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="bg-gray-200">
            <h1>
                <Link href="/">
                    <a><img src="/logo.png" alt="Olá FSL!" className="h-24 py-4 mx-auto" /></a>
                </Link>
            </h1>
            <NavBar />
        </div>
    )
}

export default Header