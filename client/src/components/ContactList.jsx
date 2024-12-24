import React, { useMemo } from "react";
import { useChat } from "../context/ChatContext";
import {
  Sidebar,
  ContactItem,
  ContactName,
  LastMessage,
} from "../styles/StyledComponents";

export default function ContactList() {
  const { state, dispatch } = useChat();

  const sortedContacts = useMemo(() => {
    return [...state.contacts].sort((a, b) => a.name.localeCompare(b.name));
  }, [state.contacts]);

  return (
    <Sidebar>
      {sortedContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          isSelected={state.selectedContact?.id === contact.id}
          onClick={() => dispatch({ type: "SELECT_CONTACT", payload: contact })}
        >
          <ContactName>{contact.name}</ContactName>
          <LastMessage>{contact.lastMessage}</LastMessage>
        </ContactItem>
      ))}
    </Sidebar>
  );
}
