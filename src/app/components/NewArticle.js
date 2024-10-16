'use client'

import '../styles/NewArticle.css'
import Link from 'next/link'

function NewArticle({ title, imageUrl, description, link, source }) {
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
                    {source && source.length != 0 && <i id='source'>Media courtesy of {source}</i>}
            </div>
        </div>
    );
}

export default NewArticle;