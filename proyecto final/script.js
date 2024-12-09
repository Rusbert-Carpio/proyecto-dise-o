// Capturando elementos del DOM
const form = document.getElementById('medicine-form');
const reminderList = document.getElementById('reminder-list');
const historyList = document.getElementById('history-list');

// Manejar la sumisión del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const medicineName = document.getElementById('medicine-name').value;
    const scheduleTime = document.getElementById('schedule-time').value;

    // Crear un elemento de recordatorio
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${medicineName} - ${scheduleTime}</span>
        <button onclick="deleteReminder(this)">Eliminar</button>
    `;

    // Agregarlo a la lista
    reminderList.appendChild(listItem);

    // Limpiar el formulario
    form.reset();
});

// Eliminar recordatorios y moverlos al historial
function deleteReminder(button) {
    const reminder = button.parentElement;

    // Mover el recordatorio al historial
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `
        <span>${reminder.textContent.replace("Eliminar", "")}</span>
        <button onclick="restoreReminder(this)">Restaurar</button>
    `;

    historyList.appendChild(historyItem);

    // Eliminar de la lista actual
    reminder.remove();
}

// Restaurar recordatorios desde el historial
function restoreReminder(button) {
    const historyItem = button.parentElement;

    // Crear un nuevo recordatorio con el texto del historial
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${historyItem.textContent.replace("Restaurar", "")}</span>
        <button onclick="deleteReminder(this)">Eliminar</button>
    `;

    // Agregarlo a la lista de recordatorios
    reminderList.appendChild(listItem);

    // Eliminar el elemento del historial
    historyItem.remove();
}

// Limpiar el historial completo
function clearHistory() {
    historyList.innerHTML = ''; // Vacía todo el contenido del historial
}