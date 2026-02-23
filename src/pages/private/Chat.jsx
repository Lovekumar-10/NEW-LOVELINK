// pages/private/Chat.jsx
import React from "react";
import { useParams } from "react-router-dom";

import ChatLayout from "../../components/chat/ChatLayout";
import Navbar from "../../components/Navbar";

const Chat = () => {
  const { chatId } = useParams();
  return (
    <div className="flex flex-col h-screen">
      {/* Only navbar */}
      <Navbar />

      {/* ChatLayout fills remaining height */}
      <div className="flex-1">
        <ChatLayout chatId={chatId} />
      </div>
    </div>
  );
};

export default Chat;
