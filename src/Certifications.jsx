import React from "react";
import certification1 from "./assets/JavaScriptCertificationFreecodecamp.jpg";

const Certifications = () => {
  return (
    <div className="Certifications">
      <a
        href="https://www.freecodecamp.org/certification/odohemma/javascript-algorithms-and-data-structures"
        target="_blank"
      >
        <img src={certification1} className="logo" alt="Vite logo" />
      </a>
    </div>
  );
};

export default Certifications;
