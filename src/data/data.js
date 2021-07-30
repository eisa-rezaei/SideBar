import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import svg1 from "../svg/1.svg";
import svg2 from "../svg/2.svg";
import svg3 from "../svg/3.svg";
import svg4 from "../svg/4.svg";
import svg5 from "../svg/5.svg";
import svg6 from "../svg/6.svg";

export const SideBarData = [
  { title: "Home", icon: <AiIcons.AiFillHome />, path: "/" },
  { title: "Reports", icon: <IoIcons.IoIosPaper />, path: "/reports" },
  { title: "Products", icon: <FaIcons.FaCartPlus />, path: "/products" },
  { title: "Team", icon: <IoIcons.IoMdPeople />, path: "/team" },
  { title: "Massage", icon: <FaIcons.FaEnvelopeOpenText />, path: "/massage" },
  { title: "Suport", icon: <IoIcons.IoMdHelpCircle />, path: "/support" },
];
export const HomepageSiteData = [
  {
    title: "playground",
    discription: "Playground for HTML, CSS and JavaScript",
  },
  {
    title: "Code editor",
    discription: "Code editor",
  },
  {
    title: "File manager",
    discription: "Upload and handle files in browser",
  },
  {
    title: "Experiment",
    discription: "Code and run your own experiments",
  },
  {
    title: "Templates",
    discription: "Start with ready-to-use designs and structures",
  },
  {
    title: "public space",
    discription: "Showcase personal projects on your own public space",
  },
];
export const Svg = [
  { svg: svg1 },
  { svg: svg5 },
  { svg: svg2 },
  { svg: svg4 },
  { svg: svg3 },
  { svg: svg5 },
  { svg: svg6 },
];
