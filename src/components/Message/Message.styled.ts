import Avatar from "antd/lib/avatar";
import styled, { css } from "styled-components";

export const MessageStyled = {
  Wrapper: styled.div`
    display: flex;
    align-items: flex-end;
  `,
  Avatar: styled(Avatar)`
    margin: 0px 10px 0 0;
  `,
  Name: styled.span`
    font-size: 14px;
    font-weight: bold;
  `,
  Container: styled.div<{ align: "left" | "right" }>`
    ${({ align }) =>
      align === "right" &&
      css`
        margin-left: auto;
      `};
    padding: 10px 15px;
    background-color: white;
    border-radius: 8px;
  `,
  ChatText: styled.p`
    margin: 0;
  `
};
