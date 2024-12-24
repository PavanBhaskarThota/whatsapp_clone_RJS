import { init,tx, id } from "@instantdb/react";

const useInstantDB = () => {
  const db = init({
    appId: "715d1df4-9f1c-4bd1-bc18-25df168086c3",
  });

  console.log(db);

  const fetchMessages = async (contactId) => {
    return await db.get(`messages/${contactId}`);
  };

  const sendMessage = async (contactId, text) => {
    try {
      const message = { id: Date.now(), text, sent: true };
      await db.transact(tx.messages[id(contactId)].update(message));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  

  return { fetchMessages, sendMessage };
};

export default useInstantDB;
