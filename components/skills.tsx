export default function Skills() {
    return (
        <section className=" d-flex flex-column" id="skills">
        <div className="p-lg-5 p-3 skill-cover">
         <h3 className="text-center text-white">Coding Skills</h3>
         <div className="row text-center my-auto "> 
             <div className="col-md-3 col-sm-6">
                 <div className="skill-item">
                     <i className="fa fa-github fa-5x"></i>
                     <h2><span className="counter"> 90 </span><span>%</span></h2>
                     <p>.Net</p>
                 </div>
             </div>
             <div className="col-md-3 col-sm-6">
                 <div className="skill-item">
                     <i className="fa fa-html5 fa-5x"></i>
                     <h2><span className="counter"> 85 </span><span>%</span></h2>
                     <p>Angular</p>
                 </div>
             </div>
             <div className="col-md-3 col-sm-6">
                 <div className="skill-item">
                     <i className="fa fa-cloud fa-5x"></i>
                     <h2><span className="counter"> 72 </span><span>%</span></h2>
                     <p>Azure</p>
                 </div>
             </div>
             <div className="col-md-3 col-sm-6">
                 <div className="skill-item">
                     <i className="fa fa-database fa-5x"></i>
                     <h2><span className="counter"> 89 </span><span>%</span></h2>
                     <p>SQL</p>
                 </div>
             </div>
         </div>
        </div> 
     </section>
    );
}