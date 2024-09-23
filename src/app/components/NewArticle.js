'use client'

import '../styles/NewArticle.css'
import { Link } from 'react-router-dom';

function NewArticle({ title, imageUrl, description, link }) {
    const divStyle = {
        backgroundImage: `url(${imageUrl})`, // Set the background image
        backgroundSize: 'cover', // Adjust how the image fits
        backgroundPosition: '0px -40px', // Center the image
        height: '25vh', // Set a height for the div
        width: '40vw', // Set a width for the div (optional)
        borderRadius: '5vw 5vw 0vw 0vw',
      };
    return (
        <div className="article-whole">
            <div className='image' style={divStyle}>

            </div>
            <div className="article-preview">
                <div className="article-title">
                    <h2>{title}</h2>
                </div>
                    <p>{description}</p>
                </div>
        </div>
    );
}

export default NewArticle;