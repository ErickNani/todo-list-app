import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('trabajo');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert('Por favor completa todos los campos');
            return;
        }
        const newTask = {
            id: Date.now(),
            title,
            description,
            type,
            completed: false,
        };
        onAddTask(newTask);
        setTitle('');
        setDescription('');
        setType('trabajo');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.input}
            />
            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={styles.textarea}
            ></textarea>
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={styles.select}
            >
                <option value="trabajo">Trabajo</option>
                <option value="casa">Casa</option>
                <option value="negocios">Negocios</option>
            </select>
            <button type="submit" style={styles.button}>
                Agregar Tarea
            </button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',
    },
    input: {
        padding: '0.5rem',
        margin: '0.5rem 0',
    },
    textarea: {
        padding: '0.5rem',
        margin: '0.5rem 0',
    },
    select: {
        padding: '0.5rem',
        margin: '0.5rem 0',
    },
    button: {
        padding: '0.5rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
};

export default AddTask;
