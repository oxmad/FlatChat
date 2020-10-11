import React from "react";

import { MessageArea } from "../../components/MessageArea/MessageArea";
import { Message } from "../../components/Message/Message";
import { MessagesContainer } from "../../components/MessagesContainer/MessagesContainer";

import { ChatPageHeader } from "./ChatPageHeader/ChatPageHeader";
import { MainLayout } from "../../layout/MainLayout";

export const ChatPage = () => {
  return (
    <MainLayout header={<ChatPageHeader />}>
      <MessagesContainer>
        <Message username="Petr Sobaka" message="I'm gay!" />
        <Message username="Vasya Kot" message="I'm not!" isMyMessage />
      </MessagesContainer>
      <MessageArea />
    </MainLayout>
  );
};
