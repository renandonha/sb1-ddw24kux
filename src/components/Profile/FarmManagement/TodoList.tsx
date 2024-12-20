import React, { useState } from 'react';
import { Plus, Check, X, Calendar } from 'lucide-react';
import { Task } from '../../../types';

interface TodoListProps {
  tasks: Task[];
  onAddTask: (task: Omit<Task, 'id'>) => void;
  onCompleteTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function TodoList({ tasks, onAddTask, onCompleteTask, onDeleteTask }: TodoListProps) {
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask({
        title: newTask,
        completed: false,
        dueDate: dueDate || undefined,
        createdAt: new Date().toISOString(),
      });
      setNewTask('');
      setDueDate('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-6">Farm Tasks</h3>
      
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
        />
        <button
          onClick={handleAddTask}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              task.completed ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onCompleteTask(task.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  task.completed
                    ? 'border-green-600 bg-green-600 text-white'
                    : 'border-gray-300'
                }`}
              >
                {task.completed && <Check className="w-4 h-4" />}
              </button>
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {task.dueDate && (
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(task.dueDate).toLocaleDateString()}
                </div>
              )}
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-gray-400 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}