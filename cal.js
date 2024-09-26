// ... (previous JavaScript code) ...

// Function to generate the calendar
function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const calendarContainer = document.getElementById("calendar-container");
    calendarContainer.innerHTML = "";

    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = `${getMonthName(month)} ${year}`;
    table.appendChild(caption);

    const thead = document.createElement("thead");
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach((day) => {
        const th = document.createElement("th");
        th.textContent = day;
        thead.appendChild(th);
    });
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.textContent = "";
            } else if (dayCounter <= daysInMonth) {
                const date = new Date(year, month, dayCounter);
                const link = document.createElement("a");
                link.href = `appointment.html?date=${date.toISOString()}`;
                link.textContent = dayCounter;
                cell.appendChild(link);
                dayCounter++;
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    calendarContainer.appendChild(table);
}

// Function to get the name of the month
function getMonthName(month) {
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    return monthNames[month];
}

// Code to handle scrolling to previous and next months
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

function updateCalendar() {
    generateCalendar(currentYear, currentMonth);
    document.getElementById("current-month").textContent = `${getMonthName(currentMonth)} ${currentYear}`;
}

updateCalendar();

document.getElementById("prev-month").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentYear--;
        currentMonth = 11; // December
    }
    updateCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentYear++;
        currentMonth = 0; // January
    }
    updateCalendar();
});
