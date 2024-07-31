import React from 'react';
import { useRecoilValue } from 'recoil';
import { notificationsState } from '../../atoms/notificationsState';

const Notification = () => {
  const notifications = useRecoilValue(notificationsState);

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl mb-4">Notifications</h2>
      <ul>
        {notifications.map((note) => (
          <li key={note.id} className="border p-2 mb-2">
            {note.message}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notification;
