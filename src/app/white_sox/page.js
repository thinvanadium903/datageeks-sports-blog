'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import '../styles/Wrapper.css'

function App() {
  return (
    <div id='wrapper'>
        <Header></Header>
        <div className='full'>
            <h1>The 2024 Chicago White Sox Are Officially the Worst Team in Modern MLB History</h1>
            <p>Hello - this is a new type of experimental article on this site that I'll be adding 
              from now on. It's called a <em>stub</em>, and it's essentially an article 
              about a neat stat/factoid, but not something suitable or substantial enough for a 
              whole feature-length article. In other words, it's the 'Shorts' edition of YouTube 
              for written content. Now that I've explained that, let's dive into one of the worst 
              baseball seasons in history.
            </p>
            <p>
              Yesterday on September 27th, the Chicago White Sox lost to the Detroit Tigers by a 
              score of 4-1. A pretty typical score for a baseball game, except this game had some 
              extra significance behind it.
            </p>
            <p>
              After this game, the Chicago White Sox sat at a 40-121 record. Their 121 losses  
              have now given them the distinction of being THE single best MLB team in modern 
              history at losing games.
            </p>
        </div>
    </div>
  );
}

export default App;