import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Abouttext() {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="about-section">
            <div className="container">
                <div className="with-man-shape">
                    <div className="row justify-content-center justify-content-lg-end">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text">
                                <div className="section-title mb-40 left-border">
                                    <span className="title-tag">ou impressions</span>
                                    <h2>We help people elevate their happiness.</h2>
                                </div>
                                <p>
                                    Over the years, a wide range of developments and innovations in the Medical Cannabis have
                                    led
                                    to many new Cannabis Firm and services being produced. Moreover, there is need for
                                    IT
                                    today, not just in urban areas but rural regions as well.
            </p>
                                <div className="about-features mt-50">
                                    <div className="sngle-features">
                                        <div className="progressbar-sec">
                                            <VisibilitySensor>
                                                {({ isVisible }) => {
                                                    const percentage = isVisible ? 26 : 0;
                                                    return (
                                                        <CircularProgressbar className="chart"
                                                            value={percentage}
                                                            strokeWidth={5}
                                                            styles={buildStyles({
                                                                pathTransitionDuration: 1,
                                                                pathColor: '#89d32a',
                                                                trailColor: '#e2e8ee',
                                                            })} />
                                                    );
                                                }}
                                            </VisibilitySensor>

                                            <span className="icon"><i className="fas fa-award" /></span>
                                        </div>
                                        <div className="counter-box">
                                            <span className="timer">
                                                <CountUp start={focus ? 0 : null} end={26} duration={5} redraw={true}>
                                                    {({ countUpRef }) => (
                                                        <Fragment>
                                                            <span ref={countUpRef} />
                                                            <VisibilitySensor
                                                                onChange={isVisible => {
                                                                    if (isVisible) {
                                                                        setFocus(true);
                                                                    }
                                                                }}
                                                            >
                                                                <span>+</span>
                                                            </VisibilitySensor>
                                                        </Fragment>
                                                    )}
                                                </CountUp>
                                            </span>
                                        </div>
                                        <div className="desc">
                                            <h4>Years of Experience</h4>
                                            <p>As a result, most of us need to know how to use computers. Our knowledge of
                    computers.</p>
                                        </div>
                                    </div>
                                    <div className="sngle-features">
                                        <div className="progressbar-sec">
                                            <VisibilitySensor>
                                                {({ isVisible }) => {
                                                    const percentage = isVisible ? 80 : 0;
                                                    return (
                                                        <CircularProgressbar className="chart"
                                                            value={percentage}
                                                            strokeWidth={5}
                                                            styles={buildStyles({
                                                                pathTransitionDuration: 1,
                                                                pathColor: '#89d32a',
                                                                trailColor: '#e2e8ee',
                                                            })} />
                                                    );
                                                }}
                                            </VisibilitySensor>

                                            <span className="icon"><i className="fas fa-globe" /></span>
                                        </div>
                                        <div className="counter-box">
                                            <span className="timer">
                                                <CountUp start={focus ? 0 : null} end={80} duration={5} redraw={true}>
                                                    {({ countUpRef }) => (
                                                        <Fragment>
                                                            <span ref={countUpRef} />
                                                            <VisibilitySensor
                                                                onChange={isVisible => {
                                                                    if (isVisible) {
                                                                        setFocus(true);
                                                                    }
                                                                }}
                                                            >
                                                                <span>+</span>
                                                            </VisibilitySensor>
                                                        </Fragment>
                                                    )}
                                                </CountUp>
                                            </span>
                                        </div>
                                        <div className="desc">
                                            <h4>Cannabis Farm Together </h4>
                                            <p>As a result, most of us need to know how to use computers. Our knowledge of
                    computers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-man-img">
                        <div className="shape">
                            <img src={process.env.PUBLIC_URL + "/assets/img/about/why_choose_us.png"} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}