import React, { useState } from "react";
import Scrollspy from "react-scrollspy";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  


  return (
    <div className="landing-menu fixed">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
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

        </div>
      </div>
    </div>
  );
};

export default Header;
