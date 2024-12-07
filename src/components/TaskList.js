import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
    // Filter tasks into pending and completed
    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <div style={styles.container}>
            <div style={styles.column}>
                <h2>Tareas Pendientes</h2>
                {pendingTasks.length === 0 && <p>No hay tareas pendientes.</p>}
                {pendingTasks.map((task) => (
                    <div key={task.id} style={styles.task}>
                        <div>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>
                                <strong>Tipo:</strong> {task.type}
                            </p>
                        </div>
                        <div>
                            <button
                                onClick={() => onToggleComplete(task.id)}
                                style={styles.completeButton}
                            >
                                Completar
                            </button>
                            <button
                                onClick={() => onDeleteTask(task.id)}
                                style={styles.deleteButton}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={styles.column}>
                <h2>Tareas Completadas</h2>
                {completedTasks.length === 0 && <p>No hay tareas completadas.</p>}
                {completedTasks.map((task) => (
                    <div key={task.id} style={styles.task}>
                        <div>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>
                                <strong>Tipo:</strong> {task.type}
                            </p>
                        </div>
                        <div>
                            <button
                                onClick={() => onToggleComplete(task.id)}
                                style={styles.uncompleteButton}
                            >
                                Desmarcar
                            </button>
                            <button
                                onClick={() => onDeleteTask(task.id)}
                                style={styles.deleteButton}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1rem',
    },
    column: {
        width: '48%',
    },
    task: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1rem 0',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    completeButton: {
        marginRight: '0.5rem',
        padding: '0.5rem',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
    uncompleteButton: {
        marginRight: '0.5rem',
        padding: '0.5rem',
        backgroundColor: '#ffc107',
        color: 'black',
        border: 'none',
        cursor: 'pointer',
    },
    deleteButton: {
        padding: '0.5rem',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
};

export default TaskList;
