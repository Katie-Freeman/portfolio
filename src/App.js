import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Katie Freeman - Full Stack Software Developer</title>
        <meta property="og:site_name" content="deski" />
        <meta
          property="og:url"
          content="https://themeforest.net/user/ib-themes"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Katie Freeman - Software Developer"
        />
        <meta
          name="description"
          content="Katie Freeman is a software developer from Atlanta, GA"
        />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
