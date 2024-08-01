import React, { memo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../../atoms/authState';
import CareTakerProfile from '../CareTaker/CareTakerProfile';
import CareTakerSchedule from '../CareTaker/CareTakerSchedule';
import Messages from '../Messaging/Messages';
import Notification from '../Messaging/Notification';

const CareTakerDashboard = () => {
  const { user } = useRecoilValue(authState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('profile'); // Initial component

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <CareTakerProfile />;
      case 'schedule':
        return <CareTakerSchedule />;
      case 'messages':
        return <Messages />;
      case 'notifications':
        return <Notification />;
      default:
        return <CareTakerProfile />;
    }
  };

  const SidebarItem = memo(({component, text}) => {
    return <li>
      <button
        onClick={() => {
          setActiveComponent(component);
          toggleSidebar();
        }}
        className="block text-gray-800 hover:bg-blue-50 px-4 py-2 rounded-lg transition duration-300 w-full text-left"
      >
        {text}
      </button>
    </li>
  });

  return (
    <section className="flex min-h-screen bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500">
      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-25 z-0 md:hidden ${isSidebarOpen ? '' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg border-r border-gray-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:shadow-none`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            className="md:hidden text-gray-800 mb-6"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">CareTaker Dashboard</h2>
          <ul className="space-y-4 flex-1">
            <SidebarItem component='profile' text="Care Taker Profile" />
            <SidebarItem component='schedule' text="Care Taker Schedule" />
            <SidebarItem component='messages' text="Messages" />
            <SidebarItem component='notifications' text="Notifications" />
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Menu Icon for Mobile */}
        <button
          className="md:hidden text-gray-800 mb-6"
          onClick={toggleSidebar}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8 h-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {user.name}</h2>
          {renderActiveComponent()}
        </div>
      </div>
    </section>
  );
};

export default CareTakerDashboard;
