import React, { useState, ChangeEvent, SyntheticEvent } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setUser } from "../../actions/user.actions";
import { Login } from "./Login";

export const LoginContainer = () => {
  const [name, setName] = useState("");
  const [hasError, setErrorStatus] = useState<boolean>(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (hasError) {
      setErrorStatus(false);
    }

    setName(e.target.value);
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      setErrorStatus(true);
      setName("");
      return;
    }

    dispatch(setUser(name));

    history.push("/");
  };

  return (
    <Login
      name={name}
      onNameChange={onNameChange}
      hasError={hasError}
      onSubmit={onSubmit}
    />
  );
};
