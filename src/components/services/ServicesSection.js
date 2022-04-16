import React from 'react';
import styled from 'styled-components';
import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Our Services</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Software Development"
            desc="We do professional Software Development. Let us help you to take your Software next level."
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Web Development"
            desc="You can hire us for any kind of Web Development. Book us for your next project. "
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="UI/UX Design"
            desc="Designing is the most important part of our Software and Website. Let us help you to capture your goal."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
