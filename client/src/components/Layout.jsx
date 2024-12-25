import React from "react";
import { AppContainer } from "../styles/StyledComponents";
import ChatWindow from "./ChatWindow";
import ContactList from "./ContactList";

export const Layout = () => {
  return (
    <AppContainer>
      <ContactList />
      <ChatWindow />
    </AppContainer>
  );
};
