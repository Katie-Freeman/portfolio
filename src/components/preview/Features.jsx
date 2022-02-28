import React from "react";

const UsefulFeatures = [
  {
    icon: "react",
    title: `React JS`,
    animDelay: "",
  },
  {
    icon: "node-js-logo",
    title: `Node.js `,
    animDelay: "400",
  },
  {
    icon: "express-logo",
    title: `Express`,
    animDelay: "600",
  },
  {
    icon: "JavaScript-logo",
    title: `JavaScript`,
    animDelay: "",
  },
  {
    icon: "HTML-logo",
    title: `HTML`,
    animDelay: "200",
  },
  {
    icon: "css-logo",
    title: `CSS`,
    animDelay: "400",
  },
  {
    icon: "logo02",
    title: `Bootstrap CSS`,
    animDelay: "200",
  },
  {
    icon: "PostgreSQL",
    title: `PostgreSQL`,
    animDelay: "600",
  },
  {
    icon: "CSM",
    title: `Certified Scrum Master`,
    animDelay: "600",
  },
];

const Features = () => {
  return (
    <>
      <div className="row justify-content-center">
        {UsefulFeatures.map((val, i) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 d-flex mt-30"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.animDelay}
          >
            <div className="feature-block">
              <div className="icon d-flex justify-content-center align-items-end">
                <img src={`images/preview/${val.icon}.png`} alt="feature" />
              </div>
              <p className="font-rubik">{val.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
