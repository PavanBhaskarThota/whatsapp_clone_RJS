import React, { useContext } from "react";

import MessageInput from "./MessageInput";
import Message from "./Message";
import { ContactsContext } from "../context/ContactsContext";

export default function ChatWindow() {
 const { state, dispatch } = useContext(ContactsContext);
  // const messages = state.selectedContact
  //   ? state.messages[state.selectedContact.id] || []
  //   : [];

  return (
    <div className="h-full flex flex-col">
      { state &&state.selectedContact ? (
        <>
          <div className="p-4 bg-gray-200 border-b">
            <h2 className="font-semibold">{state.selectedContact.name}</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {/* {state.messages && state.messages.map((message) => (
              <Message key={message.id} message={message} />
            ))} */}
            hello
          </div>
          <MessageInput />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a contact to start chatting
        </div>
      )}
    </div>
  );
}
