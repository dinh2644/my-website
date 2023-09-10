import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TabContent from "./TabContent";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabIndicator, setTabIndicator] = useState(0);

  const handeTabClick = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    setActiveTab(index);
    setTabIndicator(index);
  };

  useEffect(() => {
    AOS.init();
  }, [activeTab]);

  return (
    <>
      <section id="experienceAnchor" className="experience">
        <div className="container mainContainer">
          <div className="row mb-5">
            <div
              className="col-xl-12 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="experience">Experience</h1>
            </div>
          </div>
          <div className="row tabs">
            <div
              className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 tab-header mt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div
                className={`tabHeader ${activeTab === 0 ? "active" : ""}`}
                onClick={(e) => handeTabClick(0, e)}
              >
                U.S. TREASURY
              </div>
              <div
                className={`tabHeader ${activeTab === 1 ? "active" : ""}`}
                onClick={(e) => handeTabClick(1, e)}
              >
                CodePath
              </div>
              {/*For future tabs, insert here*/}
              <div
                className="tab-indicator"
                style={{ top: `calc(1px + ${tabIndicator * 50}px)` }}
              ></div>
            </div>
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
