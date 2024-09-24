'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import './Rice.css'

function App() {
  return (
    <div>
      <Header></Header>
      <div className='full'>
        <h1>The Unparalleled Career Dominance of Jerry Rice</h1>
        <div id='lead_image'></div>
        <p>In sports, there are many arguments - rational and otherwise - that fans and observers use to gauge
              who is the greatest player of all time in a particular sport. In basketball for instance, the argument 
              largely hinges on individual "legacy", and said argument usually comes down to 
              2 players: LeBron James for his individual longevity and consistency, and Michael Jordan for
              his peak performance and the Bulls' phenomenal team success during his tenure.
        </p>
        <p>Other sports have far more subjective requirements. In soccer, baseball, hockey, and football, players
          hold more specialized roles within their teams, and this restriction makes comparisons between positions
          and eras much more difficult. As such, the discussion of "Greatest of All Time" is more or less limited to
          a specific position. </p>
          <p>However, the wide receiver position does not experience this dilemma; simply put, Jerry Rice has it all. In his unprecedented 20-year
          career, Rice combined elite, league-leading performance with longevity and durability that would be exceptional for a quarterback or kicker,
          let alone the brutally physical wide receiver position. His career statistics tower over every other player's <h4>regardless </h4>
          of position, and the degree to which he dominated his position makes him arguably the greatest player in NFL history.
        </p>
        <h2>The Career Records</h2>
        <p>Jerry Rice doesn't just hold the career records for the major receiving categories like receiving yards and touchdowns - it's 
          the degree of separation he holds over second place, and what it would take to surpass him. Let's take a look at receiving yardage; Rice's
          career total for this category is <h4>22,895.</h4> Even just comparing this number to that of Larry Fitzgerald, the next closest on this list, is pretty unfair.
        </p>
        <div id='receiving_bar'></div>
        <p>
          Excluding Rice and Fitzgerald, no other player in NFL history has even <h4>16,000</h4> yards. 
          The lead that Jerry Rice holds is so large that I'm quite confident no other player will eclipse it. To reach 22,896 yards, a receiver would have to do one of several impossible things.
          If you were lucky enough to enjoy a 20-year career as Rice did, then you would have to average 1,100 receiving yards per year. If 20 seasons is too many for you, you could do it in 15, 
          but that would mean an even more outrageous pace of 1,500 yards per year... still leaving you about 400 yards short of the record after retirement. 
          1,100 yards is certainly achievable - since 2000, about 15 players per year reach this mark - but maintaining this pace for two decades is ludicrous. And in this same timeframe, only 41 seasons of 1,500+ receiving 
          yards have been recorded, which is less than 2 players per season.
          
        </p>
      </div>
    </div>
  );
}

export default App;
