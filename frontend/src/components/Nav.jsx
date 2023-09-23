"use client";
import React, { useState, useEffect } from "react";
import "../../styles/nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <section id="nav">
        <div className="nav">
          <div className="pl-7">
            <a href="#top">
              <img src="../assets/react.svg" alt="" />
            </a>
          </div>
          <div>
            <div className="hidden md:flex flex-wrap gap-6">
              <div className="nav-titles nav-titles-ltr">
                <a href="#body">QueryRoom</a>
              </div>
              <div className="nav-titles nav-titles-ltr">
                <a href="#cards">Blogs</a>
              </div>
              <div className="nav-titles nav-titles-ltr">Notes</div>
              {/* <div className="nav-titles nav-titles-ltr">Sponsors</div> */}
              {/* <div className="nav-titles nav-titles-ltr">FAQs</div> */}
            </div>

            <div className="relative">
              <button
                className="dropdown-toggle text-3xl md:hidden text-white cursor-pointer"
                onClick={toggleDropdown}
              >
                &#9776;
              </button>
              {isOpen && (
                <div className="dropdown-menu nav-dropdown">
                  <a href="#" className="nav-dropdown-titles">
                    QueryRoom
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    Blogs
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    Notes
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
