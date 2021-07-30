import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SideBarData } from "../../data/data";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./Navbar.css";
function NavBar() {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const toggleHandler = () => {
    setToggleSideBar(!toggleSideBar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "seagreen" }}>
        <nav className="navbar">
          <div className="navbar-menu">
            <Link to="#">
              <FaIcons.FaBars onClick={toggleHandler} />
            </Link>
            <div className="nav-links">
              <Link to="/login">
                <h3>login</h3>
              </Link>
              <Link to="/">
                <h3>sign up </h3>
              </Link>
            </div>
          </div>
        </nav>
        <div className={toggleSideBar ? `menu-items` : `menu-items active`}>
          <ul>
            <button>
              <AiOutlineClose onClick={toggleHandler} />
            </button>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} onClick={toggleHandler}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="menu-title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
