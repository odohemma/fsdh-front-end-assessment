import React from "react";
import project4 from "./assets/GetMemeImageReactProject.jpg";
import project3 from "./assets/DisplayColourReactProject.jpg";
import project2 from "./assets/ReactRouterHNGProject.jpg";
import project1 from "./assets/MyTravelJournalReactProject.jpg";

const Works = () => {
  return (
    <div className="Works">
      <a href="https://display-color.netlify.app" target="_blank">
        <img src={project4} className="logo" alt="Vite logo" />
      </a>
      <a href="https://get-meme-images.netlify.app" target="_blank">
        <img src={project3} className="logo react" alt="React logo" />
      </a>
      <a href="https://coruscating-fox-ca0946.netlify.app" target="_blank">
        <img src={project2} className="logo" alt="Vite logo" />
      </a>
      <a href="https://teal-pony-63446b.netlify.app" target="_blank">
        <img src={project1} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};

export default Works;
