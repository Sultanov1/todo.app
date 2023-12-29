import React, { useState } from 'react';
import './App.css';

const AddTaskForm = ({ onAddTask }) => {
    const [currentTask, setCurrentTask] = useState('');

    const handleInputChange = (event) => {
        setCurrentTask(event.target.value);
    };

    const handleAddClick = () => {
        if (currentTask.trim() !== '') {
            onAddTask({ id: String(Date.now()), text: currentTask });
            setCurrentTask('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={currentTask}
                onChange={handleInputChange}
                placeholder="Введите новую задачу"
            />
            <button onClick={handleAddClick}>Добавить</button>
        </div>
    );
};

const Task = ({ task, onDeleteTask }) => {
    return (
        <div>
            {task.text}
            <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
        </div>
    );
};

const App = () => {
    const [tasks, setTasks] = useState([
        { id: '1', text: 'Сделать покупки' },
        { id: '2', text: 'Выучить React' },
        { id: '3', text: 'Записаться на курс по веб-разработке' },
    ]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <AddTaskForm onAddTask={handleAddTask} />
            <div>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDeleteTask={handleDeleteTask} />
                ))}
            </div>
        </div>
    );
};

export default App;
