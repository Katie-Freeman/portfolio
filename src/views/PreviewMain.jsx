import React from "react";
import Header from "../components/preview/Header";
import PreviewGallery from "../components/preview/PreviewGallery";
import Features from "../components/preview/Features";

import { Helmet } from "react-helmet";


const PreviewMain = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Katie Freeman</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="landing-banner" id="intro">
        <Header />

        <div className="container">
          <div className="text-wrapper">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <h1>Katie Freeman </h1>
              </div>
            </div>
            <p className="font-rubik sub-text">
              Full-Stack Developer
            </p>
            <img className="profilePic" src ="/images/preview/profile-pic.jpeg" alt="ProfilePic"/>
            <a href="https://www.linkedin.com/in/katie-freeman-075533117/">
              <i className= "fa fa-linkedin" aria-hidden="true"></i>
            </a>
           
            <a href="https://github.com/Katie-Freeman">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a href="mailto:katiefreeman0611@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
          {/* /.text-wrapper */}

          {/* <div className="block-bg-wrapper">
            <DemoCounter />
          </div> */}
          {/* /.block-bg-wrapper */}
        </div>

        <img
          src="images/preview/shape01.svg"
          alt="shape"
          className="shape shape-one"
        />
        <img
          src="images/preview/shape02.svg"
          alt="shape"
          className="shape shape-two"
        />
        <img
          src="images/preview/shape03.svg"
          alt="shape"
          className="shape shape-three"
        />
        <img
          src="images/preview/shape04.svg"
          alt="shape"
          className="shape shape-four"
        />
      </div>
      {/* /.landing-banner */}
      <div className="ln-footer">
        <img
          src="images/preview/shape18.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/preview/shape19.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/preview/shape20.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/preview/shape21.svg"
          alt="shape"
          className="shapes shape-four"
        />

        <div id="about-me" className="container" data-aos="fade-up" data-aos-duration="1200">
          <h1>
            About Me:
          </h1>
          <p>
            Hey! I’m Katie, and I am a Full Stack Software Developer. I live in Atlanta, GA with my husband and son, and we love to go to the parks on the weekend, or go to brunch and eat donuts from our favorite bakery <a href= "https://www.hellyeahglutenfree.com/"><b>Hell Yeah Gluten Free</b></a>. I am a current student in DigitalCrafts’s Full Stack Web Development bootcamp and I’m loving every second of it! I’ve learned a ton and I am eager to use this knowledge of JavaScript, React, Node, and Postgres to build amazing products.
            </p>

        </div>


      </div>
      {/* 	Home Demo */}
      <div className="home-demo-section pt-150" id="projects">
        <img
          src="images/preview/shape05.svg"
          alt="home-demo"
          className="shape-one"
        />
        <div className="container">
          <div className="main-title text-center">
            <h2 style={{marginBottom:"2em"}}>
              <span>
                Projects <img src="images/preview/line01.svg" alt="demo" />
              </span>
            </h2>
          </div>

          <PreviewGallery />
        </div>
      </div>
      {/* /.home-demo-section  */}

      <div className="theme-feature mt-200" id="skills">
        <img
          src="images/preview/shape08.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/preview/shape09.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/preview/shape10.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/preview/shape11.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <div className="main-title text-center">
          <h2>
            <span>
              Skills{" "}
              <img src="images/preview/line02.svg" alt="feature" />
            </span>
          </h2>
        </div>
        {/* main-title */}

        <div className="main-wrapper">
          <Features />
        </div>
      </div>
      {/* /.feature-block */}

      <div className="ln-footer">
        <img
          src="images/preview/shape18.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/preview/shape19.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/preview/shape20.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/preview/shape21.svg"
          alt="shape"
          className="shapes shape-four"
        />

      </div>
      {/* /ln-footer */}
    </div>
  );
};

export default PreviewMain;
