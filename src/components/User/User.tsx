import React from "react";

import styled from "styled-components";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

const StyledAvatar = styled(Avatar)<{ color: string }>`
  margin-right: 10px;
  background-color: ${({ color }) => color};
  vertical-align: middle;
`;

interface PrivateRouteProps {
  username: string;
  color: string;
}

export const User: React.FC<PrivateRouteProps> = ({ username, color }) => (
  <Wrapper>
    <StyledAvatar size="large" gap={1} color={color}>
      <UserOutlined />
    </StyledAvatar>
    <Text>{username}</Text>
  </Wrapper>
);
