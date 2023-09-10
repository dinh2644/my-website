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
            <img src="assets/img/envelope.svg" alt="" width="17" height="17" />
          </a>
          <a href="https://www.linkedin.com/in/dinh2644/" className="ms-1">
            <img src="assets/img/linkedin.png" alt="" width="17" height="17" />
          </a>
          <a href="https://github.com/dinh2644" className="ms-1">
            <img src="assets/img/github.svg" alt="" width="17" height="17" />
          </a>
        </span>
      </nav>
    </>
  );
};

export default PhoneNav;
