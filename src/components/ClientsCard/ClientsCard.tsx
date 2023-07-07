import React from "react";

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
      <ClientImg src={clientImg} />
      <ClientBody>
        <ClientTitle>{clientTitle}</ClientTitle>
        <ClientText>{clientText}</ClientText>
        <ClientService>{clientService}</ClientService>
      </ClientBody>
    </ClientWrapper>
  );
};
