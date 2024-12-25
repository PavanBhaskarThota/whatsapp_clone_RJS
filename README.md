# WhatsApp Clone - One-Way Real-Time Chat

A minimal WhatsApp clone focusing on a one-way real-time chat feature. Built using React.js, this application provides a simple yet effective way to send messages and view them in real-time across different screens.

---

## Features

- **One-Way Real-Time Chat**: Users can send messages that update instantly across all connected screens.
- **Responsive Design**: A clean and intuitive interface styled with `styled-components` for seamless usability on any device.
- **Real-Time Updates**: Powered by InstantDB, ensuring messages appear immediately on all screens without needing manual refreshes.

---

## Technology Stack

- **Frontend**: React.js
  - **Hooks Used**:
    - `useState`: For managing local state, such as message input and chat data.
    - `useEffect`: For syncing the app with real-time updates.
    - `useReducer`: For handling complex state transitions (e.g., chat history management).
    - `useContext`: For sharing state globally across components (e.g., user information or app settings).
- **Styling**: Styled-components for modular, dynamic styling.
- **Backend/Database**: InstantDB for handling real-time updates and persistent message storage.

---

## How It Works

1. **Sending Messages**: Type a message into the input box and press send.
2. **Real-Time Updates**: Messages are immediately stored in InstantDB and propagated to all connected clients.
3. **User Experience**: The UI is styled with styled-components for a consistent look and feel.

---

## Screenshot

![Site Preview]([https://i.ibb.co/kMxJpt2/Screenshot-2024-12-25-180607.png](https://i.ibb.co/kMxJpt2/Screenshot-2024-12-25-180607.png))

---

Thank you for exploring this project!
