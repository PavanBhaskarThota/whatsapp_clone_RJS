import React from "react";
import { AppContainer, Navbar } from "../styles/StyledComponents";
import ChatWindow from "./ChatWindow";
import ContactList from "./ContactList";

export const Layout = () => {
  return (
    <div
      style={{ height: "100vh", width: "100%", backgroundColor: "lightgray" }}
    >
      <Navbar>
        <h3 style={{ paddingLeft: "10px", margin: "0px", color: "white" }}>
          WhatsApp Clone
        </h3>
      </Navbar>
      <AppContainer>
        <ContactList />
        <ChatWindow />
      </AppContainer>{" "}
    </div>
  );
};
