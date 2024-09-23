// components/ArticleGrid.js
'use client'

import '../styles/ArticleGrid.css';
import NewArticle from './NewArticle';

function ArticleGrid({ articles }) {
    return (
        <div className="article-grid">
            {articles.map((article, index) => (
                <NewArticle
                    key={index}
                    title={article.title}
                    imageUrl={article.imageUrl}
                    description={article.description}
                    link={article.link}
                />
            ))}
        </div>
    );
}

export default ArticleGrid;