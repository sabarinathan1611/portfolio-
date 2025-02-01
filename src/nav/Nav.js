import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import astroutHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import envelope from "../assets/envelope.png";
import stack from "../assets/stack.png";
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPostionclass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };
  const navPostionclass = getNavPostionclass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPostionclass;
  };
  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";
    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };
  return (
    <nav className={`nav ${navPostionclass}`}>
      {renderNavLink("/", astroutHelmet, "astronaut helmet icon", "nav-about")}
      {renderNavLink("/skills", deadEye, "deadEye helmet icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack helmet icon", "nav-projects")}
      {renderNavLink(
        "/contact",
        envelope,
        "envelope helmet icon",
        "nav-contact"
      )}
    </nav>
  );
}
