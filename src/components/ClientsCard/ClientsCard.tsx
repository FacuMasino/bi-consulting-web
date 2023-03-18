import React from "react";
import LazyLoad from "react-lazy-load";

import {
  ClientBody,
  ClientImg,
  ClientService,
  ClientText,
  ClientTitle,
  ClientWrapper,
} from "./ClientsCard.elements";

type ClientsProps = {
  clientImg: string;
  clientTitle: string;
  clientText: string;
  clientService: string;
};

export const ClientsCard = ({
  clientImg,
  clientTitle,
  clientText,
  clientService,
}: ClientsProps): JSX.Element => {
  return (
    <ClientWrapper>
      <LazyLoad height={130} width={130}>
        <ClientImg src={clientImg} />
      </LazyLoad>
      <ClientBody>
        <ClientTitle>{clientTitle}</ClientTitle>
        <ClientText>{clientText}</ClientText>
        <ClientService>{clientService}</ClientService>
      </ClientBody>
    </ClientWrapper>
  );
};
