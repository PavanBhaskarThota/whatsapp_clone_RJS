import React from "react";
import { AppContainer } from "../styles/StyledComponents";
import ChatWindow from "./ChatWindow";
import ContactList from "./ContactList";

export default function Layout() {
  return (
    <AppContainer>
      <ContactList />
      <ChatWindow />
    </AppContainer>
  );
}
