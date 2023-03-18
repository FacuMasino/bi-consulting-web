import React from "react";
import { Container } from "../../globalStyles";
import FeaturesList from "../FeaturesList/FeaturesList";
import { Heading, OurTechsContainer } from "./OurTechs.elements";

type TOurTechsList = {
  iconUrl: string;
  iconText?: string;
};

interface OurTechsArray {
  techsArray: Array<TOurTechsList>;
}

const OurTechs = ({ techsArray }: OurTechsArray) => {
  return (
    <>
      <OurTechsContainer>
        <Container>
          <Heading>Tecnologías que utilizamos</Heading>
        </Container>
        <FeaturesList flexDir="row" featuresArray={techsArray}></FeaturesList>
      </OurTechsContainer>
    </>
  );
};

export default OurTechs;
