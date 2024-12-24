import React, { useState } from "react";
import { useChat } from "../context/ChatContext";
import { useInstantDB } from "../hooks/useInstantDB";
import {
  InputContainer,
  MessageInput as Input,
  SendButton,
} from "../styles/StyledComponents";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { state } = useChat();
  const { sendMessage } = useInstantDB();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || !state.selectedContact) return;

    sendMessage(state.selectedContact.id, message.trim());
    setMessage("");
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <SendButton type="submit">Send</SendButton>
    </InputContainer>
  );
}
