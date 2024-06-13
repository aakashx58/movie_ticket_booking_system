function submitForm(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;
    const timing = document.getElementById('timing').value;
    const availableSeat = document.getElementById('availableSeat').value;
    const name = document.getElementById('name').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const seatType = document.getElementById('seatType').value;
    document.getElementById('categoryDisplay').textContent = `Category: ${category}`;
    document.getElementById('timingDisplay').textContent = `Timing: ${timing}`;
    document.getElementById('availableSeatDisplay').textContent = `Available Seat: ${availableSeat}`;
    document.getElementById('nameDisplay').textContent = `Name: ${name}`;
    document.getElementById('bookingDateDisplay').textContent = `Booking Date: ${bookingDate}`;
    document.getElementById('seatTypeDisplay').textContent = `Seat Type: ${seatType}`;
    document.getElementById('successMessage').textContent = 'Booking Successful!';
    document.getElementById('bookingDetails').classList.remove('hidden');
    document.getElementById('downloadTicketBtn').classList.remove('hidden');
    document.getElementById('downloadTicketBtn').onclick = downloadTicket;
}
function downloadTicket() {
    const category = document.getElementById('category').value;
    const timing = document.getElementById('timing').value;
    const availableSeat = document.getElementById('availableSeat').value;
    const name = document.getElementById('name').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const seatType = document.getElementById('seatType').value;
    const ticketContent = `Category: ${category}\nTiming: 
                        ${timing}\nAvailable Seat: 
                        ${availableSeat}\nName: 
                        ${name}\nBooking Date: 
                        ${bookingDate}\nSeat Type: 
                        ${seatType}`;
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'ticket.txt';
    link.click();
}
function changeSeatType() {
    const category = document.getElementById('category').value;
    const seatTypeSelect = document.getElementById('seatType');
    seatTypeSelect.innerHTML = '';

    // Select the availableSeat dropdown element
    const availableSeatSelect =document.getElementById('availableSeat');

    // Clear the options
    availableSeatSelect.innerHTML = '';
    if (category === 'bus' || category === 'train') {
        const seatOptions = ['General', 'Sleeper', 'AC'];
        seatOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.toLowerCase();
            optionElement.textContent = option;
            seatTypeSelect.appendChild(optionElement);
        });
    } else if (category === 'movie') {
        const seatOptions = ['Standard', 'Premium', 'VIP'];
        seatOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.toLowerCase();
            optionElement.textContent = option;
            seatTypeSelect.appendChild(optionElement);
        });
    }
    for (let i = 1; i <= 30; i++) {
        const optionElement = document.createElement('option');
        optionElement.value = i;
        optionElement.textContent = i;
        availableSeatSelect.appendChild(optionElement);
    }
}
window.onload = changeSeatType;