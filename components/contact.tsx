export default function Contact() {
    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex flex-column">
                <div className="row my-auto" id="contact">
                    <div className="col-md-8">
                        <div className="contact-cont">
                            <h3>CONTACT Me</h3>
                            <div className="heading-border-light"></div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div className="row con-form">
                            <div className="col-md-12">
                                <input type="text" name="full-name" placeholder="Full Name" className="form-control" />
                            </div>
                            <div className="col-md-12">
                                <input type="text" name="email" placeholder="Email Id" className="form-control" />
                            </div>
                            <div className="col-md-12">
                                <input type="text" name="subject" placeholder="Subject" className="form-control" />
                            </div>
                            <div className="col-md-12"><textarea name="" id=""></textarea></div>
                            <div className="col-md-12 sub-but"><button className="btn btn-general btn-white" role="button">Send</button></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-5">
                        <div className="contact-cont2">
                            <div className="contact-add contact-box-desc">
                                <h3><i className="fa fa-map-marker cl-atlantis fa-2x"></i> Address</h3>
                                <p>408, Block 2, Puja Navarathna, Sarjapur Main Road <br />
                                    26/2, 27/B, Doddakannelli Village<br />
                                    Bangalore, Karnataka, India <br /></p>
                            </div>
                            <div className="contact-phone contact-side-desc contact-box-desc">
                                <h3><i className="fa fa-phone cl-atlantis fa-2x"></i> Phone</h3>
                                <p>+91 998 602 9057</p>
                            </div>
                            <div className="contact-mail contact-side-desc contact-box-desc">
                                <h3><i className="fa fa-envelope-o cl-atlantis fa-2x"></i> Email</h3>
                                <address className="address-details-f">
                                    Email: <a href="mailto:me@surajitg.dev" className="">contact@SurajitG.dev</a>
                                </address>
                                <ul className="list-inline social-icon-f top-data">
                                    <li><a href="https://www.linkedin.com/in/surajit-ghosh-34681410/" target="_blank" rel="noreferrer"><i className="fa top-social fa-linkedin" style={{ color: "#4267b2", ["border-color" as any]: "#4267b2" }}></i></a></li>
                                    <li><a href="https://www.twitter.com/surajit29ghosh" target="_blank" rel="noreferrer"><i className="fa top-social fa-twitter" style={{ color: "#4AB3F4", ["border-color" as any]: "#4AB3F4" }}></i></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" d-flex flex-column" id="maps">
                <div id="map">
                    <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0392789056723!2d77.69680441525041!3d12.905195869822592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131fe48c06fd%3A0x6ba18b5901497611!2sPUJA%20NAVARATHNA%2C%20Chikkakannalli%2C%20Bengaluru%2C%20Karnataka%20560035!5e0!3m2!1sen!2sin!4v1648960133607!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}