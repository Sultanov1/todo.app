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

export default AddTaskForm;
