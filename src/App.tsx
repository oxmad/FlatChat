import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginPage } from "./pages/Login/LoginPage";
import { ChatPage } from "./pages/Chat/ChatPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

import { store } from "./store";

import "antd/dist/antd.css";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="*" component={ChatPage} />
        </Switch>
      </Router>
    </Provider>
  );
}
