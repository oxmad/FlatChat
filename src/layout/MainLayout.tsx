import React from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout/layout";

const Wrap = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px 50px 35px;
`;

const StyledLayout = styled(Layout)`
  height: 100%;
`;

interface MainLayoutProps {
  header: React.ReactElement;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ header, children }) => {
  return (
    <StyledLayout>
      <Layout.Header>{header}</Layout.Header>
      <Layout>
        <Layout.Content>
          <Wrap>{children}</Wrap>
        </Layout.Content>
      </Layout>
    </StyledLayout>
  );
};
