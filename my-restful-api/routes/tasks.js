const express = require('express');
const router = express.Router();
const { Task } = require('../models');

// Endpoint do pobierania wszystkich zadań
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint do tworzenia nowego zadania
router.post('/tasks', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint do aktualizacji istniejącego zadania
router.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            await task.update(req.body);
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint do usuwania istniejącego zadania
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            await task.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
