import { useState } from "react";
import Envelope from "../assets/img/envelope.svg";
import LinkedIn from "../assets/img/linkedin.png";
import GitHub from "../assets/img/github.svg";

const Accordion = () => {
  const [activeContentBx, setActiveContentBx] = useState(false);

  const handleContentBx = () => {
    setActiveContentBx(!activeContentBx);
  };

  return (
    <>
      <div className="row mx-auto accordionRow">
        <div className="col">
          <div className="accordion mb-4">
            <div
              className={`contentBx ${activeContentBx ? "active" : ""}`}
              onClick={() => handleContentBx()}
            >
              <div className="label">
                About <span className="indexNum">1</span>
              </div>
              <div className="content">
                <p className="aboutDesc text-start">
                  {" "}
                  Hi, I’m Tu Dinh. A computer science student from NY. I have
                  great interest to deepen my understanding in full-stack <br />{" "}
                  development and various areas of technology. <br />
                  <br /> Expected graduation: May 2025 <br /> School: Binghamton
                  University <br /> Connect:{" "}
                  <span id="aboutLogos">
                    <a href="mailto:dinh2644.mail@gmail.com">
                      <img
                        src={Envelope}
                        alt=""
                        width="15"
                        height="15"
                        title="email"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/dinh2644/">
                      <img
                        src={LinkedIn}
                        alt=""
                        width="15"
                        height="15"
                        title="LinkedIn"
                      />
                    </a>
                    <a href="https://github.com/dinh2644">
                      <img
                        src={GitHub}
                        alt=""
                        width="15"
                        height="15"
                        title="GitHub"
                      />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="contentBx">
              <a href="#projectsAnchor" className="accordLinks">
                <div className="projectsSummary mb-4">
                  Projects <span className="indexNum">2</span>
                </div>
              </a>
            </div>
          </div>
          <div className="accordion">
            <div className="contentBx">
              <a href="#experienceAnchor" className="accordLinks">
                <div className="expSummary">
                  Experience <span className="indexNum">3</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
