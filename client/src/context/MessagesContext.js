import React, { createContext, useReducer } from 'react';

const initialState = { messages: {}, selectedContact: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return { ...state, messages: { ...state.messages, [action.payload.contactId]: action.payload.messages } };
    case 'SET_SELECTED_CONTACT':
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
};

export const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setMessages = (contactId, messages) => dispatch({ type: 'SET_MESSAGES', payload: { contactId, messages } });
  const setSelectedContact = (contactId) => dispatch({ type: 'SET_SELECTED_CONTACT', payload: contactId });

  return (
    <MessagesContext.Provider value={{ ...state, setMessages, setSelectedContact }}>
      {children}
    </MessagesContext.Provider>
  );
};
