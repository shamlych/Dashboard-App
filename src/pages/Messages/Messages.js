import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './Messages.css'

export default function Messages() {
  return (
    <div className="messages">
       <ChatEngine height="100vh"
       projectID="5db63919-a27c-4dd3-a684-1667fbe842a8"
       userName="Miro"
       userSecret="123123"/>
    </div>
  );
}
