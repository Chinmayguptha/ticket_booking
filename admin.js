// Get events from localStorage or use default events
let events = JSON.parse(localStorage.getItem('events')) || [
    {
        id: 1,
        name: "Summer Music Festival",
        category: "concert",
        date: "2024-07-15",
        location: "Central Park",
        price: 50,
        availableTickets: 100,
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        name: "Blockbuster Movie Premiere",
        category: "movie",
        date: "2024-06-20",
        location: "City Cinema",
        price: 15,
        availableTickets: 200,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        name: "Football Championship",
        category: "sports",
        date: "2024-08-10",
        location: "Stadium Arena",
        price: 75,
        availableTickets: 500,
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4,
        name: "Jazz Night Live",
        category: "concert",
        date: "2024-07-25",
        location: "Blue Note Jazz Club",
        price: 35,
        availableTickets: 80,
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 5,
        name: "Marvel Universe Marathon",
        category: "movie",
        date: "2024-06-30",
        location: "IMAX Theater",
        price: 25,
        availableTickets: 150,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 6,
        name: "Tennis Open Finals",
        category: "sports",
        date: "2024-08-15",
        location: "National Tennis Center",
        price: 90,
        availableTickets: 300,
        image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 7,
        name: "Classical Symphony Night",
        category: "concert",
        date: "2024-07-10",
        location: "City Concert Hall",
        price: 45,
        availableTickets: 120,
        image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 8,
        name: "Indie Film Festival",
        category: "movie",
        date: "2024-07-05",
        location: "Art House Cinema",
        price: 20,
        availableTickets: 100,
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 9,
        name: "Bicycle Race Championship",
        category: "sports",
        date: "2024-08-20",
        location: "Sports Arena",
        price: 65,
        availableTickets: 400,
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
];

// DOM Elements
const addEventForm = document.getElementById('addEventForm');
const eventsTableBody = document.getElementById('eventsTableBody');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
    setupEventListeners();
});

// Display events in the table
function displayEvents() {
    eventsTableBody.innerHTML = '';
    
    events.forEach(event => {
        const row = createEventRow(event);
        eventsTableBody.appendChild(row);
    });
}

// Create a table row for an event
function createEventRow(event) {
    const row = document.createElement('tr');
    
    // Get icon based on category
    let categoryIcon = '';
    switch(event.category) {
        case 'concert':
            categoryIcon = '<i class="fas fa-music me-2"></i>';
            break;
        case 'movie':
            categoryIcon = '<i class="fas fa-film me-2"></i>';
            break;
        case 'sports':
            categoryIcon = '<i class="fas fa-running me-2"></i>';
            break;
        default:
            categoryIcon = '<i class="fas fa-calendar-alt me-2"></i>';
    }
    
    row.innerHTML = `
        <td>${event.name}</td>
        <td>${categoryIcon}${event.category}</td>
        <td>${new Date(event.date).toLocaleDateString()}</td>
        <td>${event.location}</td>
        <td>$${event.price}</td>
        <td>${event.availableTickets}</td>
        <td>
            <button class="btn btn-sm btn-warning edit-btn" data-event-id="${event.id}">
                <i class="fas fa-edit me-1"></i>Edit
            </button>
            <button class="btn btn-sm btn-danger delete-btn" data-event-id="${event.id}">
                <i class="fas fa-trash me-1"></i>Delete
            </button>
        </td>
    `;
    
    return row;
}

// Setup event listeners
function setupEventListeners() {
    // Add event form submission
    addEventForm.addEventListener('submit', handleAddEvent);
    
    // Event delegation for edit and delete buttons
    eventsTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const eventId = parseInt(e.target.dataset.eventId);
            handleEditEvent(eventId);
        } else if (e.target.classList.contains('delete-btn')) {
            const eventId = parseInt(e.target.dataset.eventId);
            handleDeleteEvent(eventId);
        }
    });
}

// Handle adding a new event
function handleAddEvent(e) {
    e.preventDefault();
    
    const newEvent = {
        id: events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1,
        name: document.getElementById('eventName').value,
        category: document.getElementById('eventCategory').value,
        date: document.getElementById('eventDate').value,
        location: document.getElementById('eventLocation').value,
        price: parseFloat(document.getElementById('eventPrice').value),
        availableTickets: parseInt(document.getElementById('eventTickets').value),
        image: document.getElementById('eventImage').value
    };
    
    events.push(newEvent);
    saveEvents();
    displayEvents();
    addEventForm.reset();
}

// Handle editing an event
function handleEditEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    // Fill the form with event data
    document.getElementById('eventName').value = event.name;
    document.getElementById('eventCategory').value = event.category;
    document.getElementById('eventDate').value = event.date;
    document.getElementById('eventLocation').value = event.location;
    document.getElementById('eventPrice').value = event.price;
    document.getElementById('eventTickets').value = event.availableTickets;
    document.getElementById('eventImage').value = event.image;
    
    // Remove the event from the list
    events = events.filter(e => e.id !== eventId);
    saveEvents();
    displayEvents();
}

// Handle deleting an event
function handleDeleteEvent(eventId) {
    if (confirm('Are you sure you want to delete this event?')) {
        events = events.filter(e => e.id !== eventId);
        saveEvents();
        displayEvents();
    }
}

// Save events to localStorage
function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
} 