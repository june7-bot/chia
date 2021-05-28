import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="about-section about-style-three pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text pr-30">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About us</span>
                                    <h2>We help people elevate their happiness.</h2>
                                </div>
                                <p>
                                    Over the years, a wide range of developments and innovations in the medical cannabis
                                    arena have led to many new Cannabis Firm and services being produced. Moreover, there
                                    is need for Cannabis today, not just in urban areas but rural regions as well.
                                </p>
                                <div className="experience-tag mt-40">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/experience-tag.png"} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 order-first order-lg-last">
                            <div className="about-img">
                                <img src={process.env.PUBLIC_URL + "/assets/img/about/about-2.jpg"} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;