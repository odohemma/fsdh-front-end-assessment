import React from "react";
import myPicture from "./assets/img_6736_2.jpg";

const Home = () => {
  return (
    <div className="Home">
      <div className="Aboutme">
        <h2>Front-End Developer</h2>
        <div>
          I am Emmanuel Odoh, and I am a ReactJS Developer. I come from a land
          surveying and construction background. You might ask why the switch.
          Well, at some point I needed to make maps on the web, and ever since
          then, my curiosity has consistently been piqued.
        </div>
      </div>
      <div>
        <img src={myPicture} className="my picture" alt="My picture" />
      </div>
    </div>
  );
};

export default Home;
