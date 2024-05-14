import {differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, parseISO} from "date-fns";
import {onBeforeUnmount, onMounted, ref} from "vue";

export function computeTimeLeft(task, currentTime) {
    const taskDate = parseISO(task.tsk_execution_date);
    const hourDifference = differenceInHours(taskDate, currentTime);
    const minutesDifference = Math.abs(differenceInMinutes(taskDate, currentTime) % 60);
    const secondsDifference = Math.abs(differenceInSeconds(taskDate, currentTime) % 60);

    return `${hourDifference}:${minutesDifference < 10 ? `0${minutesDifference}` : minutesDifference}:${
        secondsDifference < 10 ? `0${secondsDifference}` : secondsDifference
    }`
}

export function getGroupedTimeRemaining(task, currentTime) {
    if (!task) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    const taskDate = parseISO(task.tsk_execution_date);
    const daysDifference = differenceInDays(taskDate, currentTime);
    const hourDifference = daysDifference === 0 ? differenceInHours(taskDate, currentTime) % 24 : Math.abs(differenceInHours(taskDate, currentTime)) % 24;
    const minutesDifference = hourDifference === 0 && daysDifference === 0 ? differenceInMinutes(taskDate, currentTime) % 60 : Math.abs(differenceInMinutes(taskDate, currentTime) % 60);
    const secondsDifference = hourDifference === 0 && daysDifference === 0 && minutesDifference === 0 ? differenceInSeconds(taskDate, currentTime) % 60 : Math.abs(differenceInSeconds(taskDate, currentTime) % 60);

    return {
        days: daysDifference,
        hours: hourDifference,
        minutes: minutesDifference,
        seconds: secondsDifference
    }
}

export function useCurrentTime() {

    const currentTime = ref(new Date());
    let interval;

    onMounted(() => {
        interval = setInterval(() => {
            currentTime.value = new Date();
        }, 1000);
    })

    onBeforeUnmount(() => {
        clearInterval(interval);
    })

    return currentTime;
}