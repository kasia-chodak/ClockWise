const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::database:'); // Tutaj podaj ścieżkę do twojej bazy danych SQLite

// Definicja modelu Task
const Task = sequelize.define('Task', {
    // Atrybuty modelu Task
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    execution_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    // Opcje modelu
    tableName: 'tasks', // Nazwa tabeli w bazie danych
    timestamps: false // Nie dodawaj automatycznie kolumn createdAt i updatedAt
});

// Synchronizacja modelu z bazą danych
(async () => {
    try {
        await Task.sync({ force: true });
        console.log('Task model synchronized with database.');
    } catch (error) {
        console.error('Error synchronizing Task model:', error);
    }
})();

module.exports = Task;
