import { useEffect, useCallback } from "react";
import { useChat } from "../context/ChatContext";
import { storeMessageLocally } from "./useIndexedDB";

export function useInstantDB() {
  const { dispatch } = useChat();

  const sendMessage = useCallback(
    async (contactId, message) => {
      try {
        // Simulate InstantDB interaction
        const newMessage = {
          id: Date.now(),
          text: message,
          timestamp: new Date().toISOString(),
          sent: true,
        };

        dispatch({
          type: "ADD_MESSAGE",
          payload: { contactId, message: newMessage },
        });

        // Store in IndexedDB
        await storeMessageLocally(contactId, newMessage);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    [dispatch]
  );

  return { sendMessage };
}
