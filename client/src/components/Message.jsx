import React from "react";
import { MessageBubble, MessageTime } from "../styles/StyledComponents";

export default function Message({ message }) {
  return (
    <MessageBubble sent={message.sent}>
      <p>{message.text}</p>
      <MessageTime>
        {new Date(message.timestamp).toLocaleTimeString()}
      </MessageTime>
    </MessageBubble>
  );
}
