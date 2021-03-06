import React from "react";
import classe from "./footer.module.css";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className={classe.footer}>
        <p>
          Developed By:<span style={{ color: "yellow" }}>Mahmoud Ahmed</span>,
          Using React JS <FaReact /> & Redux JS integrated with external movies
          data API <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
