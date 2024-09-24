'use client'

import "../styles/Header.css"
import Link from "next/link";

function Header() {
    return (
        <div className="header">
            <div id="about">About This Site</div>
            <p id="title"><Link href='/'>DataGeeks Sports Blog</Link></p>
            <div id="login">Log In</div>
            
        </div>
    )
}

export default Header;