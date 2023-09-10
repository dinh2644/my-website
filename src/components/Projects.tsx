import Cards from "./Cards";

const Projects = () => {
  return (
    <>
      <section id="projectsAnchor" className="projects">
        <div
          className="container mainContainer"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="row">
            <div className="col d-flex justify-content-center mb-5">
              <h1 className="projects">Projects</h1>
            </div>
          </div>

          <Cards />
        </div>
      </section>
    </>
  );
};

export default Projects;
