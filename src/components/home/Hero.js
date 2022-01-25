import React from "react";
import Profile from "../../images/my-profile.png";

const Hero = () => {
  return (
    <div className="px-auto bg-hero-bg py-20">
      <div className="container w-8/12 mx-auto">
        <div className="text-center mx-auto">
          <img className="inline" src={Profile} alt="profile"/>
          <div className="text-3xl pt-6">
            <b className="font-semibold">Hello, </b>
            I am Tayfun. <br />
          </div>
          <p className="block pt-4">
            Freelance Web App Developer and Electric - Electronic Engineering
            student
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
