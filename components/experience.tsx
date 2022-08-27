export default function Experience() {
    return (
        <section className="resume-section p-3 p-lg-5 " id="experience">
          <div className="row my-auto">
              <div className="col-12">
                <h2 className="  text-center">Experience</h2>
                <div className="mb-5 heading-border"></div>
              </div>
              <div className="resume-item col-md-6 col-sm-12 " > 
                <div className="card mx-0 p-4 mb-5" style={{["border-color" as any] : "#17a2b8" , ["box-shadow" as any]: "2px 2px 2px rgba(0, 0, 0, 0.21)"}}>
                  <div className=" resume-content mr-auto">
                      <h4 className="mb-3"><i className="fa fa-globe mr-3 text-info"></i> Cloud Solution Architect</h4>
                      <p>Architect and strategize migration of old/logacy applications to be cloud ready and/or cloud native to realize benefit of cloud in enterprise landscape.</p>
                  </div>
                  <div className="resume-date text-md-right">
                      <span className="text-primary">October 2018 - Present</span>
                  </div>
                </div>  
              </div>
              <div className="resume-item col-md-6 col-sm-12">
                <div className="card mx-0 p-4 mb-5" style={{["border-color" as any]: "#ffc107", ["box-shadow" as any]: "2px 2px 2px rgba(0, 0, 0, 0.21)"}}>
                  <div className="resume-content mr-auto">
                      <h4 className="mb-3"><i className="fa fa-laptop mr-3 text-warning"></i>  Technology Architect</h4>
                      <p>Provide technical leadership to local engagement towards implementing product vision and roadmap, serving as an architect to the product development team, by evaluating and proposing technical alternatives for resolving business and technology issues.</p>
                  </div>
                  <div className="resume-date text-md-right">
                      <span className="text-primary">December 2011 - September 2018</span>
                  </div>
                </div>  
              </div>
              <div className="resume-item col-md-6 col-sm-12">
                <div className="card mx-0 p-4 mb-5" style={{["border-color" as any]: "#28a745", ["box-shadow" as any]: "2px 2px 2px rgba(0, 0, 0, 0.21)"}}>
                  <div className="resume-content mr-auto">
                      <h4 className="mb-3"><i className="fa fa-camera mr-3 text-success"></i> Lead Developer</h4>
                      <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                  <div className="resume-date text-md-right">
                      <span className="text-primary">June 2009 - November 2011</span>
                  </div>
                </div>  
              </div>
              <div className="resume-item col-md-6 col-sm-12">
                <div className="card mx-0 p-4 mb-5" style={{["border-color" as any]: "#2196f3", ["box-shadow" as any]: "2px 2px 2px rgba(0, 0, 0, 0.21)"}}>
                  <div className="resume-content mr-auto">
                      <h4 className="mb-3"><i className="fa fa-area-chart mr-3 text-primary"></i> Web Developer</h4>
                      <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                  <div className="resume-date text-md-right">
                      <span className="text-primary">June 2007 - May 2009</span>
                  </div>
                </div>  
              </div>
          </div>
      </section>
    );
}