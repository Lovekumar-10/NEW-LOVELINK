// src/context/ChatContext.jsx

import { createContext, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "firebase/firestore";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  // ✅ CREATE CHAT SESSION
  const createChatSession = async (user1, user2) => {
    const chatId = [user1, user2].sort().join("_");

    const chatRef = doc(db, "chats", chatId);
    const chatSnap = await getDoc(chatRef);

    if (!chatSnap.exists()) {
      await setDoc(chatRef, {
        participants: [user1, user2],
        createdAt: serverTimestamp(),
        lastMessage: "",
        lastMessageTime: serverTimestamp()
      });
    }

    return chatId;
  };

  // ✅ SEND MESSAGE
  const sendMessage = async (chatId, text, senderId) => {
    const messageRef = collection(db, "chats", chatId, "messages");

    await addDoc(messageRef, {
      text,
      senderId,
      type: "text",
      createdAt: serverTimestamp()
    });

    const chatDocRef = doc(db, "chats", chatId);

    await updateDoc(chatDocRef, {
      lastMessage: text,
      lastMessageTime: serverTimestamp()
    });
  };

  // ✅ LISTEN MESSAGES (REALTIME)
  const listenMessages = (chatId) => {
    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("createdAt", "asc")
    );

    return onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    });
  };

  return (
    <ChatContext.Provider
      value={{
        sendMessage,
        listenMessages,
        messages,
        createChatSession
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};



