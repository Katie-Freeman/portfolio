import React, { useState } from "react";
import Scrollspy from "react-scrollspy";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  


  return (
    <div className="landing-menu fixed">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">

          {/* End logo */}

          <div className="order-md-3 d-flex align-items-center">
            <div className="mob-header">
              <button className="toggler-menu" onClick={handleClick}>
                <div className={click ? "active" : ""}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
            {/* End Header */}
          </div>
          {/* End div */}

          <nav
            id="feature-menu"
            className="landing-mobile_menu navbar navbar-expand-sm order-md-2 "
          >
            <div className="m-auto nav-container">
              <div id="navbarSupportedContent">
                <Scrollspy
                  className="navbar-nav"
                  id="theme-menu-list"
                  items={[
                    "about-me",
                    "projects",
                    "skills",
                    "resume",
                  ]}
                  currentClassName="active"
                  offset={-65}
                >
                  <li className="nav-item">
                    <a href="#about-me" className="nav-link">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#projects" className="nav-link">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#skills" className="nav-link">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/images/preview/Katie_Freeman_Resume_Creative.pdf" className="nav-link">
                      Resume
                    </a>
                  </li>
                </Scrollspy>
              </div>
            </div>
          </nav>
          {/* #feature-menu */}

          {/* Mobile Menu Start */}
          <div className={click ? "mobile-menu menu-open" : "mobile-menu"}>
            <div className="logo order-md-1">
              <a href="#intro">
                <img src="/images/logo/deski_01.svg" alt="home-demo" />
              </a>
              <div className="fix-icon text-dark" onClick={handleClick}>
                <img src="images/icon/close.svg" alt="icon" />
              </div>
              {/* Mobile Menu close icon */}
            </div>

            <Scrollspy
              className="navbar-nav"
              id="theme-menu-list"
              items={[
                "intro",
                "demo",
                "feature",
                "inner-page",
                "choose-us",
                "support",
              ]}
              currentClassName="active"
              offset={-200}
            >
              
            </Scrollspy>
          </div>
          {/* Mobile Menu End */}
        </div>
      </div>
    </div>
  );
};

export default Header;
