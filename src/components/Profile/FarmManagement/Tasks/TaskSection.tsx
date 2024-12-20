import React from 'react';
import { TaskList } from '../../../TaskList';
import { TodoList } from '../TodoList';
import { useTaskStore } from '../../../../store/taskStore';
import { farmFields } from '../../../../data/farmFields';

export function TaskSection() {
  const { tasks, addTask, completeTask, deleteTask } = useTaskStore();

  return (
    <div className="space-y-6">
      <TaskList fields={farmFields} />
      <TodoList
        tasks={tasks}
        onAddTask={addTask}
        onCompleteTask={completeTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}