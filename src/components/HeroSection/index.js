import React, { useState } from "react";
import { Button } from "../ButtonElement";

import {
  HeroContainer,
  HeroBg,
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
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Dashboard</HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper></HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
