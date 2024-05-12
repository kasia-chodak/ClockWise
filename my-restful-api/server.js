const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(express.json()); // Parser dla danych JSON

// Podłączenie routera obsługującego endpointy zadan
app.use('/api', tasksRouter);

// Uruchomienie serwera na porcie 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
