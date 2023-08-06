import "./App.css";
import scc from "./d.png";
import git from "./github.svg";
import linked from "./linkedin.svg";
import leetcode from "./leetcode.svg";
import { useState } from "react";

function App() {
  const [button, setButton] = useState("ast");

  function asd() {
    window.location.href = "https://leetcode.com/Darpan301/";
  }

  function asd1() {
    window.location.href = "https://github.com/Darpan3011";
  }

  function asd2() {
    window.location.href = "https://linkedin.com/in/darpan-kanani";
  }

  function handleClick(e) {
    setButton(e);
  }

  return (
    <>
      <div className="container">
        <div className="sidemenu">
          <div className="imagelogo">
            <img src={scc} alt="imagess" className="a" />
            <span className="names">Darpan</span>
          </div>
          <div className="about2">
            <button className="about" onClick={() => handleClick("ast")}>
              About
            </button>
            <button className="about" onClick={() => handleClick("gfg")}>
              My Skills
            </button>
            <button className="about" onClick={() => handleClick("ddf")}>
              Work
            </button>
            <button className="about" onClick={() => handleClick("xyz")}>
              Contact
            </button>
            <div className="links">
              <img src={git} alt="Hey" onClick={asd1} />
              <img src={linked} alt="Hey" onClick={asd2} />
              <img src={leetcode} alt="Hey" onClick={asd} />
            </div>
          </div>
        </div>
        <div className="main">
          {button === "ast" && (
            <div className="content">
              <div className="qst">Hi,</div>
              <div className="rst">
                I'm <span className="fd">D</span>arpan,
                <span className="second-d">D</span>
              </div>
              <div className="sst">Web Developer</div>
              <button className="cm">Contact Me</button>
            </div>
          )}
          {button === "gfg" && (
            <div className="content">
              No skills
            </div>
          )}
          {button === "ddf" && (
            <div className="content">
              Dasdasd
            </div>
          )}
          {button === "xyz" && (
            <div className="content">
              asdasd
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
