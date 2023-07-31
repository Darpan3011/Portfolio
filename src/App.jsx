import "./App.css";
import scc from "./d.png";
import git from './github.svg'
import linked from './linkedin.svg'
import leetcode from './leetcode.svg'

function App() {
  return (
    <>
      <div className="container">
        <div className="sidemenu">
          <div className="imagelogo">
            <img src={scc} alt="imagess" className="a" />
            <span className="names">Darpan</span>
          </div>
          <div className="about2">
            <button className="about">About</button>
            <button className="about">My Skills</button>
            <button className="about">Work</button>
            <button className="about">Contact</button>
            <div className="links">
              <img src={git} alt="Hey" />
              <img src={linked} alt="Hey" />
              <img src={leetcode} alt="Hey" />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="content">
            <div className="qst">Hi,</div>
            <div className="rst">
              I'm <span className="fd">D</span>arpan,
              <span className="second-d">D</span>
            </div>
            <div className="sst">Web Developer</div>
            <button className="cm">Contact Me</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
