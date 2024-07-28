import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { notificationsState } from '../../atoms/notificationsState';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useRecoilState(notificationsState);

  const sendMessage = () => {
    setNotifications([...notifications, { id: Date.now(), message }]);
    setMessage('');
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl mb-4">Messages</h2>
      <div className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="border p-2 w-full mb-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
      <ul>
        {notifications.map((note) => (
          <li key={note.id} className="border p-2 mb-2">
            {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
