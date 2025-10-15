import toerLogo from '../images/Twhitebackground.png'
import gravityLogo from '../images/gravity-logo.png'
import lotusLogo from '../images/lotus-logo.jpg'
import redbullLogo from '../images/red-bull-logo.gif'

const WorkHistory = () => (
  <div id="workContainer">
    <div className="workItem">
      <div className="work">
        <h2>Audio Engineer</h2>
        <h3 className="employerName">TOER</h3>
        <a href="https://toermusic.com" className="websiteLink">
          toermusic.com
        </a>
        <div className="employmentDates">
          <div>Remote</div>
        </div>
        <a href="https://toermusic.com">
          <img src={toerLogo} alt="TOER Logo" className="logo"></img>
        </a>
        <div>
          -In-demand mixing, mastering, production, and recording for musical
          artists worldwide
        </div>
        <div>-Insomniac Events 2013 Discovery Project Grand Prize Winner</div>
      </div>
    </div>
    <div className="workItem">
      <div className="work">
        <h2>Live Sound Engineer</h2>
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
        <div>-Maintain and monitor complex sound systems</div>
        <div>-Engineer optimal signal chains for live music performances</div>
        <div>-Adapt creative direction to suit evolving project needs</div>
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
        <div>-Develop structured workflows</div>
        <div>
          - Assist senior engineers with prep, setup, technical insight, and
          troubleshooting
        </div>
        <div>-Act as a liaison between clients and the engineering team</div>
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
          <div>Madison, WI</div>
        </div>
        <a href="https://redbull.com">
          <img src={redbullLogo} alt="RedBull Logo" className="logo"></img>
        </a>
        <div>
          -Collaborate with student brand managers to provide unique experience
          for student events
        </div>
        <div>-Curate customized playlists to meet client requests</div>
      </div>
    </div>
  </div>
)

export default WorkHistory
