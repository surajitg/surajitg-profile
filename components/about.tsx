export default function About() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto" >
              <img src="img/logo-s.png" className="img-fluid mb-3" alt="" />
              <h1 className="mb-0">Surajit
                <span className="text-primary">Ghosh</span>
              </h1>
              <div className="subheading mb-5" style={{ ["background-color" as any]: "#4267b2"}}>Cloud Solutions Architect 
                  <a href="#"></a>
              </div>
              <p className="mb-5" style={{["max-width" as any]: '500px', ["background-color" as any]: "#4267b2"}} >I am experienced full stack software architect in microsoft technologies to provide high performance, secure and reliable solutions to meet business results. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
              <ul className="list-inline list-social-icons mb-0">
                  <li className="list-inline-item">
                      <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                  </li>
                  <li className="list-inline-item">
                      <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                  </li>
                  <li className="list-inline-item">
                      <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                  </li>
                  <li className="list-inline-item">
                      <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                  </li>
              </ul>
          </div>
      </section>
    );
}