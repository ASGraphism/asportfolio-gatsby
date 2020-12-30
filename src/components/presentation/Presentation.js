import React from "react";
import img from "../../assets/img/about.svg"
import "./Presentation.scss"

const PresentationArea = ({ data }) => {
    return (
        <div className="home container">
        <div className={`container-side l-side`}>
          <h1>
            SALAVERT
            <span className="subtitle">
              Aurore
            </span>
          </h1>
          <div className="content-wrap">
            <p className="testimonial">ENTHOUSIASTIC WEBDESIGNER & FRONT-END DEVELOPER</p>
            <div className="content">
              <p>
                Passionate about <strong>design</strong> and
                <strong>new technologies</strong>, the 3 years spent in a school of
                <strong>visual communication</strong> allowed me to acquire skills,
                openness and curiosity necessary for the job of
                <strong>Graphic Designer</strong>.
              </p>
              <p>
                It was only later that I became interested in new technologies
                (<strong>web</strong>, <strong>mobile applications</strong>). So I
                followed a second training (<strong>Web Designer</strong>,
                <strong>Web Project Manager</strong> option) in order to acquire
                knowledge in <strong>front-end development</strong>,
                <strong>UI / UX design</strong> and
                <strong>web project management</strong>.
              </p>
              <p>
                <strong>Freelancer</strong> from 2010 to 2016 as a
                self-entrepreneur, since then with pay port company, I currently
                live and work in the <strong>Paris</strong> region.
              </p>
            </div>
          </div>
        </div>

        <div className={`container-side r-side container-side-colored`}>
          <img src={img} alt="" />
        </div>
      </div> 
      )
}

export default PresentationArea