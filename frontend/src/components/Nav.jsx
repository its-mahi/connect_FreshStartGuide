"use client";
import React, { useState, useEffect } from "react";
import "../../styles/nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && event.target.closest(".nav-dropdown") === null) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

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
                <a href="#body">About</a>
              </div>
              <div className="nav-titles nav-titles-ltr">
                <a href="#cards">Schedule</a>
              </div>
              <div className="nav-titles nav-titles-ltr">Prizes</div>
              <div className="nav-titles nav-titles-ltr">Sponsors</div>
              <div className="nav-titles nav-titles-ltr">FAQs</div>
            </div>

            <div className="relative">
              <button
                className="dropdown-toggle text-3xl md:hidden cursor-pointer"
                onClick={toggleDropdown}
              >
                &#9776;
              </button>
              {isOpen && (
                <div className="dropdown-menu nav-dropdown">
                  <a href="#" className="nav-dropdown-titles">
                    About
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    Schedule
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    Prizes
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    Sponsors
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    FAQs
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
