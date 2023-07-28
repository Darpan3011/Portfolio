import "./App.css";
import scc from "./d.png";

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
          </div>
        </div>
        <div className="main">
          <div className="content">
            <div className="qst">Hi,</div>
            <div className="rst">
              I'm <span className="fd">D</span>arpan,{" "}
              <div className="second-d">D</div>
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
