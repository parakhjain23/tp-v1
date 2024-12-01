'use client'
import { Grid2x2, List, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import TaskEditModal from '../Modals/TaskEditModal';
import { MODALS, toggleModal } from '@/utils/utility';

const statuses = [
  {
    title: 'To Do',
    tasks: [
      { name: 'Task 1', description: 'Description of Task 1' },
      { name: 'Task 2', description: 'Description of Task 2' },
    ],
  },
  {
    title: 'In Progress',
    tasks: [
      { name: 'Task 3', description: 'Description of Task 3' },
      { name: 'Task 4', description: 'Description of Task 4' },
    ],
  },
  {
    title: 'Done',
    tasks: [
      { name: 'Task 5', description: 'Description of Task 5' },
      { name: 'Task 6', description: 'Description of Task 6' },
    ],
  },
];

function TaskList() {
  const [view, setView] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredStatuses = statuses
    .map((status) => ({
      ...status,
      tasks: status.tasks.filter((task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((status) => status.tasks.length > 0); // Hide statuses with no matching tasks

  const handleEditTask = () => toggleModal(MODALS.taskEditModal)
  const handleCreateTask = () => toggleModal(MODALS.taskEditModal);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
        // Check if the 'c' key is pressed without any modifiers (Ctrl, Shift, Alt, Meta)
        if (e.key === 'c' && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
            handleCreateTask();  // Call handleCreateTask function
        }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
}, []);

  return (
    <div className="p-4 bg-gray-900 text-white w-full min-h-screen">
      <TaskEditModal />
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Task List</h2>
        <ul className="menu menu-horizontal bg-base-100 rounded-box p-0">
          <li>
            <a onClick={() => setView(1)}>
              <List size={18} />
            </a>
          </li>
          <li>
            <a onClick={() => setView(0)}>
              <Grid2x2 size={18} />
            </a>
          </li>
        </ul>
      </div>
      <div className='divider m-1' />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered bg-base-200 text-white"
        />
      </div>
      {view === 0 ? (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredStatuses.map((status) => (
            <div key={status.title} className="bg-base-100 rounded-lg shadow p-3">
              <div className='flex justify-between items-center mb-3'>
                <h3 className="font-semibold">{status.title}</h3>
                <Plus size={16} className='cursor-pointer' onClick={() => handleCreateTask()} />
              </div>
              <ul className="space-y-3">
                {status.tasks.map((task, index) => (
                  <li
                    key={index}
                    onClick={handleEditTask}
                    className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700"
                  >
                    <span className="block font-medium">{task.name}</span>
                    <span className="text-gray-400 text-sm">{task.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-2">
          {filteredStatuses.map((status) =>
            status.tasks.map((task, index) => (
              <div
                key={`${status.title}-${index}`}
                onClick={handleEditTask}
                className="flex items-center p-1 rounded-lg bg-base-100 shadow hover:bg-base-200"
              >
                <div className="w-1/4">
                  <span className="text-sm font-semibold bg-gray-800 text-gray-200 px-3 py-1 rounded-lg">
                    {status.title}
                  </span>
                </div>
                <div className="w-3/4">
                  <h4 className="">{task.name}</h4>
                  <p className="text-gray-400 text-sm">{task.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default TaskList;