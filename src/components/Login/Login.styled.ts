import { Button, Alert } from "antd";

import styled from "styled-components";

export const LoginStyled = {
  Wrapper: styled.form`
    display: flex;
    flex-direction: column;
  `,
  Button: styled(Button)`
    margin-top: 15px;
  `,
  Alert: styled(Alert)`
    margin-top: 10px;
  `
};
