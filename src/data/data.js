import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  { title: "Home", icon: <AiIcons.AiFillHome />, path: "/" },
  { title: "Reports", icon: <IoIcons.IoIosPaper />, path: "/reports" },
  { title: "Products", icon: <FaIcons.FaCartPlus />, path: "/products" },
  { title: "Team", icon: <IoIcons.IoMdPeople />, path: "/team" },
  { title: "Massage", icon: <FaIcons.FaEnvelopeOpenText />, path: "/massage" },
  { title: "Suport", icon: <IoIcons.IoMdHelpCircle />, path: "/support" },
];
