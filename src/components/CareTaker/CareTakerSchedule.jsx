import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { authState } from '../../atoms/authState';
import { caretakersState } from '../../atoms/caretakersState';

const CareTakerSchedule = () => {
  const { user } = useRecoilValue(authState);
  const [caretakers, setCaretakers] = useRecoilState(caretakersState);
  const caretaker = caretakers.find(c => c.name === user.name);

  const [newTask, setNewTask] = useState({ date: '', description: '' });
  const [editMode, setEditMode] = useState(null);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [reminder, setReminder] = useState('');

  useEffect(() => {
    if (caretaker) {
      setTodos(caretaker.todos || []);
    }
  }, [caretaker]);

  if (!caretaker) {
    return <div className="container mx-auto py-10">No schedule available</div>;
  }

  const handleAddTask = () => {
    if (newTask.date && newTask.description) {
      const updatedCaretakers = caretakers.map(c =>
        c.name === user.name ? { ...c, schedule: [...c.schedule, newTask] } : c
      );
      setCaretakers(updatedCaretakers);
      setNewTask({ date: '', description: '' });
    }
  };

  const handleUpdateTask = (index) => {
    const updatedCaretakers = caretakers.map(c =>
      c.name === user.name
        ? {
            ...c,
            schedule: c.schedule.map((task, i) =>
              i === index ? { ...task, description: newTask.description } : task
            ),
          }
        : c
    );
    setCaretakers(updatedCaretakers);
    setEditMode(null);
    setNewTask({ date: '', description: '' });
  };

  const handleDeleteTask = (index) => {
    const updatedCaretakers = caretakers.map(c =>
      c.name === user.name ? { ...c, schedule: c.schedule.filter((_, i) => i !== index) } : c
    );
    setCaretakers(updatedCaretakers);
  };

  const handleAddTodo = () => {
    if (todo) {
      const newTodos = [...todos, { text: todo, reminder }];
      setTodos(newTodos);
      setReminder('');
      setTodo('');
      const updatedCaretakers = caretakers.map(c =>
        c.name === user.name ? { ...c, todos: newTodos } : c
      );
      setCaretakers(updatedCaretakers);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-100 rounded-lg shadow-lg"></div>
        <div className="relative z-10 p-8 text-white text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold">Your Schedule</h2>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Tasks</h3>
        <ul className="space-y-4">
          {caretaker.schedule.map((task, index) => (
            <li key={index} className="border p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50">
              {editMode === index ? (
                <div className="flex-1">
                  <input
                    type="text"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="w-full border p-2 rounded-lg mb-2 text-sm"
                  />
                  <div className="flex">
                    <button
                      onClick={() => handleUpdateTask(index)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditMode(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">{task.date}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{task.description}</p>
                  </div>
                  <div className="flex mt-2 sm:mt-0">
                    <button
                      onClick={() => {
                        setEditMode(index);
                        setNewTask({ date: task.date, description: task.description });
                      }}
                      className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Add New Task</h3>
          <div className="flex flex-col sm:flex-row">
            <input
              type="date"
              value={newTask.date}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
              className="border p-2 rounded-lg mb-2 sm:mb-0 sm:mr-2 text-sm sm:text-base"
            />
            <input
              type="text"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              placeholder="Task description"
              className="border p-2 rounded-lg mb-2 sm:mb-0 sm:flex-1 text-sm sm:text-base"
            />
            <button
              onClick={handleAddTask}
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">To-dos & Reminders</h3>
        <div className="flex flex-col sm:flex-row mb-4">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="New todo"
            className="border p-2 rounded-lg flex-1 mb-2 sm:mb-0 sm:mr-2 text-sm sm:text-base"
          />
          <input
            type="datetime-local"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            className="border p-2 rounded-lg mb-2 sm:mb-0 sm:mr-2 text-sm sm:text-base"
          />
          <button
            onClick={handleAddTodo}
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
          >
            Add Todo
          </button>
        </div>
        <ul className="space-y-4">
          {todos.map((todoItem, index) => (
            <li key={index} className="border p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50">
              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-sm sm:text-base">{todoItem.text}</p>
                {todoItem.reminder && (
                  <p className="text-gray-600 text-sm sm:text-base">Reminder: {new Date(todoItem.reminder).toLocaleString()}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareTakerSchedule;
