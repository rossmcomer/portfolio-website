import toerLogo from '../images/Twhitebackground.png'
import gravityLogo from '../images/gravity-logo.png'
import lotusLogo from '../images/lotus-logo.jpg'
import redbullLogo from '../images/red-bull-logo.gif'

const WorkHistory = () => (
  <div id="workContainer">
    <div className="workItem">
      <div className="work">
        <h2>Audio Engineer/Producer</h2>
        <h3 className="employerName">TOER Productions</h3>
        <a href="https://toermusic.com" className="websiteLink">
          toermusic.com
        </a>
        <div className="employmentDates">
          <div>Self-Employed, Remote</div>
        </div>
        <a href="https://toermusic.com">
          <img src={toerLogo} alt="TOER Logo" className="logo"></img>
        </a>
        <div>
          -Mix/Master/Record/Produce radio-ready records for artists all over
          the world
        </div>
        <div>
          -Helped many artists reach their full potential by polishing their raw
          ideas to achieve their desired sound
        </div>
        <div>
          -Grew an audience of over 10 thousand fans across multiple social
          media platforms with millions of song downloads/streams
        </div>
      </div>
    </div>
    <div className="workItem">
      <div className="work">
        <h2>Audio Engineering Intern</h2>
        <h3 className="employerName">Gravity Studios</h3>
        <a href="https://www.gravitystudios.com/" className="websiteLink">
          gravitystudios.com
        </a>
        <div className="employmentDates">
          <div>Chicago, Illinois</div>
        </div>
        <a href="https://www.gravitystudios.com">
          <img src={gravityLogo} alt="Gravity Logo" className="logo"></img>
        </a>
        <div>-Met with clients to discuss recording/mixing pipeline</div>
        <div>-Engineered signal chains for optimal gain-staging conditions</div>
        <div>-Mixed tracks in post-production to satisfy client requests</div>
      </div>
    </div>
    <div className="workItem">
      <div className="work">
        <h2>Musical Artist</h2>
        <h3 className="employerName">Lotus Concepts</h3>
        <a href="https://lotusconceptsmgmt.com/" className="websiteLink">
          lotusconceptsmgmt.com
        </a>
        <div className="employmentDates">
          <div>Denver, Colorado</div>
        </div>
        <a href="https://lotusconceptsmgmt.com/">
          <img src={lotusLogo} alt="Lotus Logo" className="logo"></img>
        </a>
        <div>
          -DJ over 150 events annually at popular nightclubs/corporate events
        </div>
        <div>-Collaborate with event planners to organize themed events</div>
        <div>-Tailored custom playlists to reach a dynamic audience</div>
      </div>
    </div>
    <div className="workItem">
      <div className="work">
        <h2>Musical Artist</h2>
        <h3 className="employerName">Red Bull</h3>
        <a href="https://redbull.com" className="websiteLink">
          redbull.com
        </a>
        <div className="employmentDates">
          <div>Madison/Chicago/Denver</div>
        </div>
        <a href="https://redbull.com">
          <img src={redbullLogo} alt="RedBull Logo" className="logo"></img>
        </a>
        <div>
          -Collaborate with student brand managers to provide top-tier music
          experience for student events
        </div>
        <div>-Curate customized playlists for each unique event</div>
        <div>-Maintain and manage sound and lighting equipment</div>
      </div>
    </div>
  </div>
)

export default WorkHistory
