import React, { createContext, useReducer, useContext } from "react";

const ChatContext = createContext();

const initialState = {
  contacts: [
    { id: 1, name: "Alice", lastMessage: "Hey there!" },
    { id: 2, name: "Bob", lastMessage: "How are you?" },
  ],
  selectedContact: null,
  messages: {},
  online: navigator.onLine,
};

function chatReducer(state, action) {
  switch (action.type) {
    case "SELECT_CONTACT":
      return { ...state, selectedContact: action.payload };
    case "ADD_MESSAGE":
      const contactId = action.payload.contactId;
      return {
        ...state,
        messages: {
          ...state.messages,
          [contactId]: [
            ...(state.messages[contactId] || []),
            action.payload.message,
          ],
        },
      };
    case "SET_ONLINE":
      return { ...state, online: action.payload };
    default:
      return state;
  }
}

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
