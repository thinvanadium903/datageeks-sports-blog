'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import './Rice.css'
import '../styles/Wrapper.css'

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
        <h1>The Unparalleled Career Dominance of Jerry Rice</h1>
        <div id='lead_image'></div>
        <p>In sports, there are many arguments - rational and otherwise - that fans and observers use to gauge
              who is the greatest player of all time in a particular sport or category. The most common arguments seem to balance a player's 
              peak performance, longevity, consistency, playoff performance, team success, and individual talent/athleticism.
        </p>
        <p>These are subjective criteria; there is no "formula" to plug in a player's numbers and spit out an assessment of that player's career. 
          And in sports, two fans may have drastically different interpretations of what makes a player the "greatest of all time." When judging 
          quarterbacks, some people value rings and team success over statistics and would name Tom Brady as the G.O.A.T.. Are you a numbers person that values regular season consistency? 
          Peyton Manning is your guy. Is clutch playoff performance the thing you value most? Well, Patrick Mahomes is the leader in postseason passer rating. 
          Point being, almost no one player in any sports conversation will satisfy all criteria set forth by an at-home analyst.
        </p>
          <p>However, in football, the wide receiver position does not experience this dilemma; simply put, Jerry Rice has it all. In his unprecedented 20-year
          career, Rice combined elite, league-leading performance with longevity and durability that would be exceptional for a quarterback or kicker,
          let alone the brutally physical wide receiver position. His career statistics tower over every other receiver's <h4>regardless </h4>
          of position, and the degree to which he dominated his position makes him arguably the greatest player in NFL history.
        </p>
        <h2>The Career Records</h2>
        <p>Jerry Rice doesn't just hold the career records for the major receiving categories like receiving yards and touchdowns - it's 
          the degree of separation he holds over second place, and what it would take to surpass him. We're going to look at a lot of statistics, 
          but the first we'll use is receiving yards.
        </p>
        <p>
          To show you how large Jerry Rice's lead stands in the department of receiving yardage, the first graph I'll show you has him removed. Here, the top receiver is 
          Larry Fitzgerald, who is one of only two players in NFL history to reach 16,000 receiving yards. Specifically, his total stands at 17,492 yards, or about a 
          10% lead over Hall of Fame receiver Terrell Owens.
        </p>
        <div id='yards_bar1'></div>
        <p>Now, here's another chart made to include Rice. His career total in receiving yards?</p>
        <h2>22,895.</h2>
        <div id='yards_bar2'></div>
        <p>
          Fitzgerald is a future Hall of Fame receiver too, but even he can't get within 5,000 yards of Rice. To reach him, he would need to magically increase his receiving yardage by <h4>31%</h4>. 
          The lead that Jerry Rice holds is so large that I'm quite confident no other player will eclipse it. To reach this echelon, a receiver would have to do one of several impossible things.
          If you were lucky enough to enjoy a 20-year career as Rice did, then you would have to average 1,100 receiving yards per year. If 20 seasons is too many for you, you could do it in 15, 
          but that would mean an even more outrageous pace of 1,500 yards per year... still leaving you about 400 yards short of the record after retirement. 
          1,100 yards is certainly achievable - since 2000, about 15 players per year reach this mark - but maintaining this pace for two decades is ludicrous. And in this same timeframe, only 41 seasons of 1,500+ receiving 
          yards have been recorded, which is less than 2 players per season.
        </p>
        <p>
          Touchdowns are another category where no one threatens to surpass #80. Once again, I'll show you two charts: first without Rice, then with him included. Randy Moss is another name often mentioned in debates 
          over the greatest receiver of all time. A main reason for this is touchdowns - his 156 touchdown catches are insanely impressive, and give him a slim three-touchdown lead over bronze medalist Terrell Owens.
        </p>
        <div id='receiving_touchdowns_2_25'></div>
        <p>
          And here's the same graph with Jerry.
        </p>
        <div id='receiving_touchdowns_1_25'></div>
        <p>
          Rice's <h4>197</h4> touchdown catches stand 26% above Moss' career total. In these two categories he is untouchable; even when we compare him against all positions 
          and all touchdown types, Rice has STILL walked in the endzone with the ball in his hands more times than any other player in NFL history.
        </p>
        <div id='total_touchdowns_bar'></div>
      </div>
    </div>
  );
}

export default App;
