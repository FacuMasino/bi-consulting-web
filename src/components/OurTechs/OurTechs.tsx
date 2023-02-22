import React from "react";
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
        <Heading>Tecnologías que utilizamos</Heading>
        <FeaturesList flexDir="row" featuresArray={techsArray}></FeaturesList>
      </OurTechsContainer>
    </>
  );
};

export default OurTechs;
