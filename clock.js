const current_time = "23:56:45";
let [current_hours, current_minutes, current_seconds] = current_time.split(":").map(Number);

const currentClock = document.getElementById("current-clock");
const exactClock = document.getElementById("exact-clock");

function pad(value) {
    return value.toString().padStart(2, "0");
}

function updateCurrentClock() {
    current_seconds++;

    if (current_seconds === 60) {
        current_seconds = 0;
        current_minutes++;
    }

    if (current_minutes === 60) {
        current_minutes = 0;
        current_hours++;
    }

    if (current_hours === 24) {
        current_hours = 0;
    }

    if (currentClock) {
        currentClock.textContent = `${pad(current_hours)}:${pad(current_minutes)}:${pad(current_seconds)}`;
    }
}

function updateExactClock() {
    if (!exactClock) return;
    const now = new Date();
    exactClock.textContent = now.toLocaleTimeString("en-US", { hour12: false });
}

if (currentClock && exactClock) {
    currentClock.textContent = `${pad(current_hours)}:${pad(current_minutes)}:${pad(current_seconds)}`;
    updateExactClock();
    setInterval(() => {
        updateCurrentClock();
        updateExactClock();
    }, 1000);
    console.log("Current clock initialized:", currentClock.textContent);
    console.log("Exact system time initialized:", exactClock.textContent);
} else {
    console.error("Required clock elements not found.");
}