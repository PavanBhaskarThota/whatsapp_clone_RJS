import { init, tx, id } from "@instantdb/react";

const useInstantDB = () => {
  const db = init({
    appId: "715d1df4-9f1c-4bd1-bc18-25df168086c3",
  });

  function fetchUsers() {
    const { isLoading, error, data } = db.useQuery({
      users: {},
    });
    return { isLoading, error, data };
  }

  function fetchMessages(contactId) {
    const { isLoading, error, data } = db.useQuery({
      messages: { contactId: contactId },
    });
    return { isLoading, error, data };
  }

  function sendMessage(contactId, text) {
    db.transact(
      db.tx.messages[id()].update({
        createdAt: new Date(),
        text: text,
        contactId: contactId,
        sent: true,
      })
    );
  }
  function addUser(name) {
    db.transact(
      db.tx.users[id()].update({
        createdAt: new Date(),
        name: name,
      })
    );
  }

  return { fetchUsers, sendMessage, addUser, fetchMessages };
};

export default useInstantDB;
