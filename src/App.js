import React, { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask'
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <Header />
            <AddTask onAddTask={addTask} />
            <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} />
        </div>
    );
}

export default App;
