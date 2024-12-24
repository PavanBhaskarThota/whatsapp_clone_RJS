// import React, { useEffect } from 'react';
// import { ContactsProvider } from './context/ContactsContext';
// import { MessagesProvider } from './context/MessagesContext';
// import { ContactList } from './components/ContactList';
// import { ChatWindow } from './components/ChatWindow';
// // import { ContactsProvider } from './context/ContactsContext';
// // import { MessagesProvider } from './context/MessagesContext';
// // import ContactList from './components/ContactList';
// // import ChatWindow from './components/ChatWindow';

// const App = () => {
//   useEffect(() => {
//     // Fetch initial data for contacts and messages here.
//   }, []);

//   return (
//     <ContactsProvider>
//       <MessagesProvider>
//         <div className="app">
//           <ContactList />
//           <ChatWindow />
//         </div>
//       </MessagesProvider>
//     </ContactsProvider>
//   );
// };

// export default App;


import React from "react";
import { ChatProvider } from "./context/ChatContext";

// import "./styles.css";
import Layout from "./components/Layout";

export default function App() {
  return (
    <ChatProvider>
      <Layout />
    </ChatProvider>
  );
}
