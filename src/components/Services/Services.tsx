import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import {
  Heading,
  ServicesContainer,
  ServicesSection,
} from "./Services.elements";
import { Container } from "../../globalStyles";
import ServicesCard from "../ServicesCard/ServicesCard";

type ServicesCardInfo = {
  cardImgUrl: string;
  cardTitle: string;
  cardText: string;
};

interface ServicesCardList {
  name: string;
  servicesArray: Array<ServicesCardInfo>;
}

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
            ({ cardImgUrl, cardTitle, cardText }: ServicesCardInfo, index) => {
              return (
                <AnimationOnScroll
                  animateIn="animate__fadeIn"
                  offset={80}
                  animateOnce={true}
                  delay={index * 150}
                >
                  <ServicesCard
                    key={index}
                    cardImgUrl={cardImgUrl}
                    cardTitle={cardTitle}
                    cardText={cardText}
                  />
                </AnimationOnScroll>
              );
            },
          )}
        </ServicesContainer>
      </Container>
    </ServicesSection>
  );
};

export default Services;
