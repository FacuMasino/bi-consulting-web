import React from "react";
import { Container } from "../../globalStyles";
import FeaturesList from "../FeaturesList/FeaturesList";
import { Heading, OurTechsContainer } from "./OurTechs.elements";

const OurTechs = ({ techsArray }: OurTechsArray) => {
  return (
    <>
      <OurTechsContainer>
        <Container>
          <Heading>Tecnologías que utilizamos</Heading>
        </Container>
        <FeaturesList
          flexDir="row"
          featuresArray={techsArray}
          animate={false}
        ></FeaturesList>
      </OurTechsContainer>
    </>
  );
};

export default OurTechs;
