import React, { useState } from 'react';
import { Bot, CheckCircle2, Clock } from 'lucide-react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueTime?: string;
}

interface FieldTasks {
  fieldId: number;
  tasks: Task[];
}

interface TaskListProps {
  fields: Array<{
    id: number;
    name: string;
  }>;
}

export function TaskList({ fields }: TaskListProps) {
  const [tasks, setTasks] = useState<FieldTasks[]>([
    {
      fieldId: 1,
      tasks: [
        { id: '1-1', text: "Water tomatoes (soil moisture low)", completed: false, priority: 'high', dueTime: '10:00 AM' },
        { id: '1-2', text: "Check for signs of blight", completed: false, priority: 'medium' },
        { id: '1-3', text: "Add support stakes for growing plants", completed: false, priority: 'low' }
      ]
    },
    {
      fieldId: 2,
      tasks: [
        { id: '2-1', text: "Harvest mature lettuce heads", completed: false, priority: 'high', dueTime: '2:00 PM' },
        { id: '2-2', text: "Plant new seedlings in empty spots", completed: false, priority: 'medium' },
        { id: '2-3', text: "Apply organic pest control", completed: false, priority: 'low' }
      ]
    },
    {
      fieldId: 3,
      tasks: [
        { id: '3-1', text: "Prune excess foliage", completed: false, priority: 'medium' },
        { id: '3-2', text: "Check soil pH levels", completed: false, priority: 'high', dueTime: '4:00 PM' },
        { id: '3-3', text: "Remove any damaged fruits", completed: false, priority: 'low' }
      ]
    }
  ]);

  const toggleTask = (fieldId: number, taskId: string) => {
    setTasks(prevTasks => 
      prevTasks.map(fieldTasks => {
        if (fieldTasks.fieldId === fieldId) {
          return {
            ...fieldTasks,
            tasks: fieldTasks.tasks.map(task => 
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          };
        }
        return fieldTasks;
      })
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-500 bg-yellow-50';
      case 'low': return 'text-blue-500 bg-blue-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recommended Tasks</h2>
        <div className="flex items-center gap-2 text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          <Bot className="w-4 h-4" />
          <span className="text-sm font-medium">AI Generated</span>
        </div>
      </div>

      <div className="space-y-6">
        {tasks.map((fieldTasks) => {
          const field = fields.find(f => f.id === fieldTasks.fieldId);
          return (
            <div key={fieldTasks.fieldId} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <h3 className="font-medium text-gray-800 mb-3">{field?.name}</h3>
              <div className="space-y-2">
                {fieldTasks.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg group transition-all ${
                      task.completed ? 'bg-gray-50' : ''
                    }`}
                  >
                    <button 
                      onClick={() => toggleTask(fieldTasks.fieldId, task.id)}
                      className={`p-1 rounded-full transition-colors ${
                        task.completed 
                          ? 'text-green-500 bg-green-50' 
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50'
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                    <div className="flex-1">
                      <span className={`text-gray-600 ${
                        task.completed ? 'line-through text-gray-400' : ''
                      }`}>
                        {task.text}
                      </span>
                      {task.dueTime && (
                        <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>Due: {task.dueTime}</span>
                        </div>
                      )}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}