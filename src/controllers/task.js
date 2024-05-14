import {formatISO} from "date-fns";

export async function createTask(name, date, userId) {
    const response = await fetch('http://localhost:5000/api/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, date, userId }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

export async function getAllUserTasks(userId) {
    const response = await fetch(`http://localhost:5000/api/tasks/${userId}`, {
        method: 'GET'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
}

// date should be finish date
export async function finishTask(taskId, userId, date) {
    const response = await fetch('http://localhost:5000/api/task', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId, date: formatISO(date), userId }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

// result: {onTimeCount, lateCount, notFinishedCount, totalCount}
export async function getUserCompletionStatistics(userId) {
    const response = await fetch(`http://localhost:5000/api/tasks/${userId}/statistics`, {
        method: 'GET'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}