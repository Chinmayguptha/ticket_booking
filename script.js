// Sample events data
let events = [
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
const eventsGrid = document.getElementById('eventsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const dateFilter = document.getElementById('dateFilter');
const searchFilter = document.getElementById('searchFilter');
const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
const bookingForm = document.getElementById('bookingForm');
const confirmBookingBtn = document.getElementById('confirmBooking');

// Current booking state
let currentEvent = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    console.log('Events:', events);
    console.log('Events Grid element:', eventsGrid);
    
    if (!eventsGrid) {
        console.error('Events grid element not found!');
        return;
    }
    
    displayEvents(events);
    setupEventListeners();
});

// Display events in the grid
function displayEvents(eventsToShow) {
    console.log('Displaying events:', eventsToShow);
    eventsGrid.innerHTML = '';
    
    eventsToShow.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

// Create an event card element
function createEventCard(event) {
    console.log('Creating card for event:', event);
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6';
    
    // Get icon based on category
    let categoryIcon = '';
    switch(event.category) {
        case 'concert':
            categoryIcon = '<i class="fas fa-music"></i>';
            break;
        case 'movie':
            categoryIcon = '<i class="fas fa-film"></i>';
            break;
        case 'sports':
            categoryIcon = '<i class="fas fa-running"></i>';
            break;
        default:
            categoryIcon = '<i class="fas fa-calendar-alt"></i>';
    }
    
    col.innerHTML = `
        <div class="card event-card h-100">
            <div class="card-img-top position-relative" style="height: 200px; overflow: hidden;">
                <img src="${event.image}" alt="${event.name}" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="category-icon">
                    ${categoryIcon}
                </div>
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">
                    <strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}<br>
                    <strong>Location:</strong> ${event.location}<br>
                    <span class="availability">Available Tickets: ${event.availableTickets}</span>
                </p>
                <div class="mt-auto d-flex justify-content-between align-items-center">
                    <span class="price">$${event.price}</span>
                    <button class="btn btn-primary book-btn" data-event-id="${event.id}">
                        <i class="fas fa-ticket-alt me-2"></i>Book Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Setup event listeners
function setupEventListeners() {
    // Filter events
    categoryFilter.addEventListener('change', filterEvents);
    dateFilter.addEventListener('change', filterEvents);
    searchFilter.addEventListener('input', filterEvents);
    
    // Booking form
    document.getElementById('ticketCount').addEventListener('input', updateTotalPrice);
    confirmBookingBtn.addEventListener('click', handleBooking);
}

// Filter events based on selected criteria
function filterEvents() {
    const category = categoryFilter.value;
    const date = dateFilter.value;
    const search = searchFilter.value.toLowerCase();
    
    let filteredEvents = events.filter(event => {
        const matchesCategory = !category || event.category === category;
        const matchesDate = !date || event.date === date;
        const matchesSearch = !search || 
            event.name.toLowerCase().includes(search) ||
            event.location.toLowerCase().includes(search);
            
        return matchesCategory && matchesDate && matchesSearch;
    });
    
    displayEvents(filteredEvents);
}

// Update total price in booking form
function updateTotalPrice() {
    if (!currentEvent) return;
    
    const ticketCount = parseInt(document.getElementById('ticketCount').value) || 0;
    const totalPrice = ticketCount * currentEvent.price;
    document.getElementById('totalPrice').value = `$${totalPrice}`;
}

// Handle booking process
function handleBooking() {
    if (!currentEvent) return;
    
    const ticketCount = parseInt(document.getElementById('ticketCount').value);
    
    if (ticketCount > currentEvent.availableTickets) {
        alert('Not enough tickets available!');
        return;
    }
    
    // Update available tickets
    currentEvent.availableTickets -= ticketCount;
    
    // Show success message
    alert(`Booking confirmed! You have booked ${ticketCount} ticket(s) for ${currentEvent.name}`);
    
    // Close modal and refresh display
    bookingModal.hide();
    filterEvents();
}

// Event delegation for booking buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('book-btn')) {
        const eventId = parseInt(e.target.dataset.eventId);
        currentEvent = events.find(event => event.id === eventId);
        
        if (currentEvent) {
            document.getElementById('eventName').value = currentEvent.name;
            document.getElementById('ticketCount').value = 1;
            document.getElementById('totalPrice').value = `$${currentEvent.price}`;
            bookingModal.show();
        }
    }
}); 