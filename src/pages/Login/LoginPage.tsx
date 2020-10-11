import React from "react";

import { Typography } from "antd";
import styled from "styled-components";

import { LoginContainer } from "../../components/Login/LoginContainer";
import { MainLayout } from "../../layout/MainLayout";

const { Title } = Typography;

const TitleWhite = styled.h3`
  font-size: 20px;
  color: white;
`;

export const LoginPage = () => {
  return (
    <MainLayout header={<TitleWhite>FlatChat</TitleWhite>}>
      <Title>Введите имя</Title>
      <LoginContainer />
    </MainLayout>
  );
};
