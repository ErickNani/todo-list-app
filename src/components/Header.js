import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1>To-do-list App</h1>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        padding: '1rem 0',
    },
};

export default Header;
