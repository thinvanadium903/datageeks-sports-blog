'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import '../styles/Wrapper.css'
import './Jaguars.css'

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
      <h1>STUB: The Jaguars Play a LOT of Games in London</h1>
        <div id='lead_image'></div>
        <p>Hello - this is a new type of experimental article on this site that I'll be adding from now on. It's called a <h4 id='special'>stub</h4>, and it's essentially an article about a neat stat/factoid, 
        but not something suitable or substantial enough for a whole feature-length article. In other words, it's the 'Shorts' edition of YouTube for written content.
        </p>
        <p>
          This is a thought I had while watching the Week 6 Jaguars-Bears matchup in London - I watched the Jaguars play two games in London last year and thought to myself, "hang on - didn't they play there last year?" 
          Then at the end of the game, I heard the annoucer mention that Week 7 for the Jags would <h4>also</h4> be held across the pond. Confused and also curious, I then went on the search for all NFL London games.
        </p>
        <p>If you haven't seen a graph on this subject before, let me be the first to show you: it's staggering.</p>
        <div id='bar'></div>
        <p>Since 2007 and through 2024, the NFL has scheduled 39 regular-season games in London stadiums. The Jaguars have played in 13 of those games, or one-third.</p>
        <div id='pie'></div>
        <p>This is bizarre for a variety of reasons. </p>
      </div>
    </div>
  );
}

export default App;