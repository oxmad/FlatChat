import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { User } from "../../../components/User/User";
import { resetUser } from "../../../actions/user.actions";
import { userSelector } from "../../../selectors/user.selectors";

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatPageHeader = () => {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(resetUser());
  };

  const user = useSelector(userSelector);

  return (
    <HeaderWrap>
      <User username={user!.username} color={user!.color} />
      <Button icon={<LogoutOutlined />} onClick={Logout} ghost>
        Log out
      </Button>
    </HeaderWrap>
  );
};
