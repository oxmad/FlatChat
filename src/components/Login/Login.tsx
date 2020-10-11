import React, { ChangeEvent, memo, SyntheticEvent } from "react";

import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { LoginStyled } from "./Login.styled";
const { Wrapper, Button, Alert } = LoginStyled;

interface LoginProps {
  name: string;
  onNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
}

export const Login = memo<LoginProps>(
  ({ name, onNameChange, onSubmit, hasError }) => (
    <Wrapper onSubmit={onSubmit}>
      <Input
        value={name}
        onChange={onNameChange}
        size="large"
        placeholder="Введите имя"
        prefix={<UserOutlined />}
      />
      {hasError && <Alert message="Field is empty." type="error" />}
      <Button size="large" type="primary" htmlType="submit">
        Вход
      </Button>
    </Wrapper>
  )
);
