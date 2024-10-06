'use client'

import "../styles/Header.css"
import Link from "next/link";

function Header() {
    return (
        <div className="header">
            <div id="about"><Link href='/about'>About This Site</Link></div>
            <div id="title">
                <p><Link href='/'>DataGeeks Sports Blog</Link></p>
            </div>
            <div id="login"><Link href='/login'>Log In</Link></div>
            
        </div>
    )
}

export default Header;