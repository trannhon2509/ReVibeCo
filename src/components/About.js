import React from 'react';

const About = () => {
  return (
    <section className="section__container about__container" id="about">
      <div className="about__header">
        <div>
          <h2 className="section__header">About us</h2>
          <p className="section__description">
            Our passion for exceptional craftsmanship drives us to curate the
            best pieces for every room in your house.
          </p>
        </div>
        <button className="about__btn">Learn More</button>
      </div>
      <div className="about__content">
        <div className="about__image">
          <img src="assets/about.png" alt="about" />
        </div>
        <div className="about__grid">
          <div className="about__card">
            <h3>1.</h3>
            <h4>Who we are</h4>
            <p>
              You get a 2-week free trail to kick the Smaert tries. We want you
              to.
            </p>
          </div>
          <div className="about__card">
            <h3>2.</h3>
            <h4>What do we do</h4>
            <p>
              We give you a free course that guides you through the process.
            </p>
          </div>
          <div className="about__card">
            <h3>3.</h3>
            <h4>How do we help</h4>
            <p>Use our multimedia lectures, videos, and coaching sessions.</p>
          </div>
          <div className="about__card">
            <h3>4.</h3>
            <h4>Create success story</h4>
            <p>
              With access to online learning resources anyone can transform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
