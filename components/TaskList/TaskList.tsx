'use client'
import { Grid2x2, List } from 'lucide-react';
import React, { useState } from 'react';

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

  return (
    <div className="p-4 bg-gray-900 text-white w-full min-h-screen">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Task List</h2>
        <ul className="menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <a onClick={() => setView(1)}>
              <List />
            </a>
          </li>
          <li>
            <a onClick={() => setView(0)}>
              <Grid2x2 color="#ffffff" />
            </a>
          </li>
        </ul>
      </div>
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
            <div key={status.title} className="bg-base-100 rounded-lg shadow p-4">
              <h3 className="text-xl font-semibold mb-3">{status.title}</h3>
              <ul className="space-y-3">
                {status.tasks.map((task, index) => (
                  <li
                    key={index}
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
        <div className="space-y-3">
          {filteredStatuses.map((status) =>
            status.tasks.map((task, index) => (
              <div
                key={`${status.title}-${index}`}
                className="flex items-start p-4 rounded-lg bg-base-100 shadow"
              >
                <div className="w-1/4">
                  <span className="text-sm font-semibold bg-gray-800 text-gray-200 px-3 py-1 rounded-lg">
                    {status.title}
                  </span>
                </div>
                <div className="w-3/4">
                  <h4 className="text-lg font-medium">{task.name}</h4>
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