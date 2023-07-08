import React from "react";
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
        <Heading>Lo que ofrecemos</Heading>
        <ServicesContainer>
          {servicesArray.map(
            ({ cardImgUrl, cardTitle, cardText }: ServicesCardInfo, index) => {
              return (
                <ServicesCard
                  key={index}
                  cardImgUrl={cardImgUrl}
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
