import React from "react";
import {
  CardBody,
  CardImg,
  CardWrapper,
  CardTitle,
  CardText,
} from "./ServicesCard.elements";

const ServicesCard = ({
  cardImgUrl,
  cardImgAlt,
  cardTitle,
  cardText,
  index,
}: ServicesCardProps): JSX.Element => {
  return (
    <CardWrapper
      animateIn="animate__fadeIn"
      offset={80}
      animateOnce={true}
      delay={index * 150}
      key={index}
    >
      <CardImg src={cardImgUrl} alt={cardImgAlt} />
      <CardBody>
        <CardTitle>{cardTitle}</CardTitle>
        <CardText>{cardText}</CardText>
      </CardBody>
    </CardWrapper>
  );
};

export default ServicesCard;
