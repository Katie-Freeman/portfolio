import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const tabListContent = [
  {
    Demo: [
      {
        img: "Wordle-Clash",
        url: "https://wordle-clash.herokuapp.com",
        css: { background: "#FFEBDD" },
        title: "Wordle-Clash",
        subTitle: `Web Sockets, Node.js, JavaScript, Express, Postgres`,
        description: "A competitive twist on the popular web game Wordle",
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "",
        sticker: "",
      },
      {
        img: "ev-logo",
        url: "https://wordle-clash.herokuapp.com",
        css: { background: "#dff1ee" },
        title: "EV and Chill",
        subTitle: `Node.js, Express, React, MongoDB, JavaScript`,
        description: "Find electric vehicle charging stations and things to do nearby",
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "",
        sticker: "",
      },
      {
        img: "sos-logo",
        url: "https://sos-cocktails.herokuapp.com/",
        css: { background: "#a0a2a1" },
        title: "S.O.S. Cocktails",
        subTitle: `Node.js, Postgres, Express, React, JavaScript`,
        description: "Find drink recommendations based on ingredients you own",
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "",
        sticker: "",
      },
      {
        img: "Aural-Connectors",
        url: "https://aural-connectors.surge.sh/",
        css: { background: "#e4f6fb" },
        title: "Aural-Connectors",
        subTitle: `HTML, CSS, JavaScript`,
        description: "Finding concerts near you",
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "",
        sticker: "",
      },
    ],
  },
];

const PreviewGallery = () => {
  return (
    <div className="preview-gallery-wrapper">
        {tabListContent.map((tabContent, i) => (
            <div className="mixitUp-container">
              {tabContent.Demo.map((val, i) => (
                <div
                  className="mix event "
                  key={i}
                  data-aos="fade"
                  data-aos-duration="1200"
                  data-aos-delay={val.animDealy}
                >
                  <a
                    href={val.url}
                    className="img-meta"
                    style={val.css}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={`images/preview/${val.img}.jpg`}
                      alt="home-demo"
                    />
                    <span className={val.clasName}>{val.viewPage}</span>
                    <div className="new-page">{val.sticker}</div>
                  </a>

                  <div className="page-name font-rubik">{val.title}</div>
                  <div className="page-category font-rubik">{val.subTitle}</div>
                  <div className="page-description font-rubik">{val.description}</div>
                </div>
              ))}
            </div>
        ))}
    </div>
  );
};

export default PreviewGallery;
