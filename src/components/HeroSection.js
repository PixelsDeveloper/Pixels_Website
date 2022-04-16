import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import HeroTitle from './titles/HeroTitle';

const HeroSectionStyles = styled.div`
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 30px); // height of header
  display: flex;
  align-items: center;
  justify-content: center;
  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
  .hero__info {
    flex: 3;
  }
  .hero__img {
    flex: 4;
    img {
      object-fit: contain;
    }
  }
  .hero__title {
    margin-bottom: 1.5rem;
    max-width: 470px;
  }
  .hero__desc {
    margin-bottom: 1.5rem;
    max-width: 470px;
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    .hero__img {
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 400px;
        margin-top: auto;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HeroSectionStyles id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__info">
            <HeroTitle className="hero__title">
              Junior, Software Engineer || Founder at Pixels Developer.
            </HeroTitle>
            <ParagraphText className="hero__desc">
              Mission-driven full stack developer with a passion for thoughtful
              UI design, & collaboration. I'm Farhad Ahmed from Bangladesh. I do
              content on Design & Software Development.As a software developer,
              I enjoy using my obsessive attention to detail, my unequivocal
              love for making things, & my mission-driven work ethic to change
              the world.
            </ParagraphText>
            <PrimaryButton
              buttonType={Link}
              smooth
              to="contact"
              className="hero__cta"
            >
              Get In Touch
            </PrimaryButton>
          </div>
          <div className="hero__img">
            <img src={HeroImg} alt="Artistic" />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
