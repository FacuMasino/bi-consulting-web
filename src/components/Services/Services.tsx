import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import {
  Heading,
  ServicesContainer,
  ServicesSection,
} from "./Services.elements";
import { Container } from "../../globalStyles";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = ({ name, servicesArray }: ServicesCardList) => {
  return (
    <ServicesSection name={name}>
      <Container>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          offset={60}
          animateOnce={true}
        >
          <Heading>Lo que ofrecemos</Heading>
        </AnimationOnScroll>
        <ServicesContainer>
          {servicesArray.map(
            (
              { cardImgUrl, cardImgAlt, cardTitle, cardText }: ServicesCardInfo,
              index,
            ) => {
              return (
                <ServicesCard
                  key={index}
                  index={index}
                  cardImgUrl={cardImgUrl}
                  cardImgAlt={cardImgAlt}
                  cardTitle={cardTitle}
                  cardText={cardText}
                />
              );
            },
          )}
        </ServicesContainer>
      </Container>
    </ServicesSection>
  );
};

export default Services;
