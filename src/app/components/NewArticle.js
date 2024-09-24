'use client'

import '../styles/NewArticle.css'
// import { Link } from 'react-router-dom';
import Link from 'next/link'

function NewArticle({ title, imageUrl, description, link }) {
    const divStyle = {
        backgroundImage: `url(${imageUrl})`, // Set the background image
        
      };
    return (
        <div className="article-whole">
            <div className='image' style={divStyle}>

            </div>
            <div className="article-preview">
                <div className="article-title">
                        <Link href={link}><h2>{title}</h2></Link>
                </div>
                    <p>{description}</p>
            </div>
        </div>
    );
}

export default NewArticle;