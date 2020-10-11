import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;

  > * + * {
    margin-top: 10px;
  }
`;

export const MessagesContainer: React.FC = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
