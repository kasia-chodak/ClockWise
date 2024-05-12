import axios from 'axios';

// Funkcja do pobierania zadań z API
async function fetchTasksFromAPI() {
    try {
        // Adres URL twojego API
        const apiUrl = 'http://localhost:3000/tasks'; // Adres lokalny, port 3000

        // Wykonaj żądanie HTTP GET do API
        const response = await axios.get(apiUrl);

        // Sprawdź czy żądanie było udane
        if (response.status === 200) {
            // Zwróć dane
            return response.data;
        } else {
            // Obsłuż ewentualne błędy
            console.error('Error fetching tasks:', response.statusText);
            return [];
        }
    } catch (error) {
        // Obsłuż błędy połączenia
        console.error('Connection error:', error.message);
        return [];
    }
}

// Wywołanie funkcji pobierającej zadań z API
fetchTasksFromAPI()
    .then(tasks => {
        console.log('Tasks:', tasks);
        // Tutaj możesz dalej przetwarzać otrzymane zadania
    })
    .catch(error => {
        console.error('Error:', error);
    });
