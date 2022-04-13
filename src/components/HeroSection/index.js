import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          preload="auto"
          delay="none"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Dash</HeroH1>
        <HeroP>Finance made easy.</HeroP>
        <HeroBtnWrapper>
          <button className="hero-btn">Login</button>
          <button className="hero-btn">Sign Up</button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
