import Accordion from "./Accordion";
import SideNav from "./SideNav";
import EnsoCircle from "../assets/img/enso.png";

const Home = () => {
  return (
    <>
      <SideNav />
      <section id="aboutAnchor">
        <div
          className="container mainContainer"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 id="tuDinh">Tu Dinh</h1>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <img src={EnsoCircle} alt="enso cirlce" id="ensoCircle" />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col d-flex justify-content-center">
              <p id="contents">contents</p>
            </div>
          </div>
          <Accordion />
        </div>
      </section>
    </>
  );
};

export default Home;
