import React from "react";

import {
  ClientBody,
  ClientImg,
  ClientService,
  ClientText,
  ClientTitle,
  ClientWrapper,
} from "./ClientsCard.elements";

export const ClientsCard = ({
  clientImg,
  clientTitle,
  clientText,
  clientService,
}: ClientsProps): JSX.Element => {
  return (
    <ClientWrapper>
      <ClientImg src={clientImg} alt={`${clientTitle} Logo`} />
      <ClientBody>
        <ClientTitle>{clientTitle}</ClientTitle>
        <ClientText>{clientText}</ClientText>
        <ClientService>
          <mark>{clientService}</mark>
        </ClientService>
      </ClientBody>
    </ClientWrapper>
  );
};
