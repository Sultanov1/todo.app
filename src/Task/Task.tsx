import React from 'react';

const Task = ({ task, onDeleteTask }) => {
    return (
        <div>
            {task.text}
            <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
        </div>
    );
};

export default Task;
