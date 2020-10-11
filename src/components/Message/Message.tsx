import React, { memo } from "react";

import { MessageStyled } from "./Message.styled";

const { Wrapper, Avatar, Name, Container, ChatText } = MessageStyled;

interface MessageProps {
  username: string;
  message: string;
  isMyMessage?: boolean;
}

export const Message = memo<MessageProps>(
  ({ username, message, isMyMessage = false }) => {
    const firstLetterName = username[0];

    return (
      <Wrapper>
        {!isMyMessage && (
          <Avatar size="large" gap={1}>
            {firstLetterName}
          </Avatar>
        )}
        <Container align={isMyMessage ? "right" : "left"}>
          {!isMyMessage && <Name>{username}</Name>}
          <ChatText>{message}</ChatText>
        </Container>
      </Wrapper>
    );
  }
);
