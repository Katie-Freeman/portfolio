import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const tabListContent = [
  {
    Demo: [
      {
        img: "Wordle-Clash",
        routerPath: "/event-organizer",
        css: { background: "#FFEBDD" },
        title: "Wordle-Clash",
        subTitle: `Web Sockets, Node, JavaScript, Express, Postgres`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "",
        sticker: "",
      },
      {
        img: "Aural-Connectors",
        routerPath: "/project-management",
        css: { background: "#e4f6fb" },
        title: "Aural-Connectors",
        subTitle: `HTML, CSS, JavaScript`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "",
      },

    ],
  },
];

const PreviewGallery = () => {
  return (
    <div className="preview-gallery-wrapper">
      <Tabs>
        {/* End tablist */}

        {tabListContent.map((tabContent, i) => (
          <TabPanel key={i}>
            <div className="mixitUp-container demo-last-unpointer">
              {tabContent.Demo.map((val, i) => (
                <div
                  className="mix event "
                  key={i}
                  data-aos="fade"
                  data-aos-duration="1200"
                  data-aos-delay={val.animDealy}
                >
                  <Link
                    to={val.routerPath}
                    className="img-meta"
                    style={val.css}
                    target="_blank"
                  >
                    <img
                      src={`images/preview/${val.img}.jpg`}
                      alt="home-demo"
                    />
                    <span className={val.clasName}>{val.viewPage}</span>
                    <div className="new-page">{val.sticker}</div>
                  </Link>

                  <div className="page-name font-rubik">{val.title}</div>
                  <div className="page-category font-rubik">{val.subTitle}</div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default PreviewGallery;
