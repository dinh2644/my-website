import Envelope from "../assets/img/envelope.svg";
import LinkedIn from "../assets/img/linkedin.png";
import GitHub from "../assets/img/github.svg";

const PhoneNav = () => {
  return (
    <>
      <nav id="phoneNav">
        <a href="#aboutAnchor">about/</a>
        <a href="#projectsAnchor">projects/</a>
        <a href="#experienceAnchor">experience</a>
        <br />
        <span id="slide">
          <a href="mailto:dinh2644.mail@gmail.com" className="ms-1">
            <img src={Envelope} alt="" width="17" height="17" />
          </a>
          <a href="https://www.linkedin.com/in/dinh2644/" className="ms-1">
            <img src={LinkedIn} alt="" width="17" height="17" />
          </a>
          <a href="https://github.com/dinh2644" className="ms-1">
            <img src={GitHub} alt="" width="17" height="17" />
          </a>
        </span>
      </nav>
    </>
  );
};

export default PhoneNav;
