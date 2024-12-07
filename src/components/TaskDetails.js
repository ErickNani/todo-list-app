import React from 'react';

const TaskDetails = ({ task }) => {
    if (!task) {
        return <p>Selecciona una tarea para ver los detalles.</p>;
    }

    return (
        <div style={styles.container}>
            <h2>Detalles de Tarea</h2>
            <p>
                <strong>Título:</strong> {task.title}
            </p>
            <p>
                <strong>Descripción:</strong> {task.description}
            </p>
            <p>
                <strong>Tipo:</strong> {task.type}
            </p>
            <p>
                <strong>Estado:</strong> {task.completed ? 'Completada' : 'Pendiente'}
            </p>
        </div>
    );
};

const styles = {
    container: {
        margin: '1rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
};

export default TaskDetails;
