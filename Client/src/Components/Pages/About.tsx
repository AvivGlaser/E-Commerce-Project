import React from "react";
//@ts-ignore
import profilePicture from "../../Assets/Images/profile-img.jpg";
import { Headers } from "../ui-components/Headers";
import { Image } from "../ui-components/Image";

export default function About() {
  return (
    <div className="about">
      <Headers header="About" />
      <Image src={profilePicture} defaultImage="..." width={350} height={350} />
      <div className="about-text">
        <h4>Hello There!</h4>
        <p>
          My name is Aviv and I'm 29 years old. <br />
          I am a student for Full Stack Web Development at 'John Bryce'
          High-Tech academy. <br />
          In this project I've built an e-commerce site.
          <br />
          You can check out my latest projects in the links attached to the
          footer below!
        </p>
        <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    
    </div>
  );
}
