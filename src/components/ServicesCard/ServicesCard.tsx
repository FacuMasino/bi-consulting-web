import React from "react";
import {
  CardBody,
  CardImg,
  CardWrapper,
  CardTitle,
  CardText,
} from "./ServicesCard.elements";

interface ServicesCardProps {
  cardImgUrl: string;
  cardTitle: string;
  cardText: string;
}

const ServicesCard = ({
  cardImgUrl,
  cardTitle,
  cardText,
}: ServicesCardProps): JSX.Element => {
  return (
    <CardWrapper>
      <CardImg src={cardImgUrl} />
      <CardBody>
        <CardTitle>{cardTitle}</CardTitle>
        <CardText>{cardText}</CardText>
      </CardBody>
    </CardWrapper>
  );
};

export default ServicesCard;
