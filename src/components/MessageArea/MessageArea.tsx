import React from "react";

import styled from "styled-components";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Wrapper = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  align-content: flex-start;
`;

const StyledTextArea = styled(TextArea)`
  padding: 10px 60px 10px 15px;
  border: 0;
  border-radius: 8px;
  resize: none;
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const MessageArea = () => {
  return (
    <Wrapper>
      <StyledTextArea autoSize={{ minRows: 3, maxRows: 6 }} />
      <StyledButton
        size="large"
        type="primary"
        shape="circle"
        htmlType="submit"
      >
        <SendOutlined />
      </StyledButton>
    </Wrapper>
  );
};
