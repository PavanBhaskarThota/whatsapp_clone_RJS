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

  console.log(fetchUsers());

  const sendMessage = async (contactId, text) => {
    try {
      const message = { id: Date.now(), text, sent: true };
      await db.transact(tx.messages[id(contactId)].update(message));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  function addUser(name) {
    db.transact(
      db.tx.users[id()].update({
        createdAt: new Date(),
        name: name,
      })
    );
  }

  return { fetchUsers, sendMessage, addUser };
};

export default useInstantDB;
