'use client'

import "../styles/Header.css"
import Link from "next/link";

function Header() {
    return (
        <div className="header">
            <div id="about"><Link href="/rice">About This Site</Link></div>
            <p id="title">DataGeeks Sports Blog</p>
            <div id="login">Log In</div>
            
        </div>
    )
}

export default Header;