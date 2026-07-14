// Native JavaScript Engine for Date Tracking & WhatsApp Forwarding Management

document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Live Calendar Engine Initialization
    const liveClockNode = document.getElementById('liveClock');
    if (liveClockNode) {
        liveClockNode.textContent = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // 2. Service Booking Event Handler
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Halt typical form page refreshing

            // Safely fetch field variables
            const name = document.getElementById('srv-name').value.trim();
            const brand = document.getElementById('srv-brand').value.trim();
            const problem = document.getElementById('srv-problem').value.trim();

            // Construct text string layout for WhatsApp delivery
            const messageText = `Hello Dream Focus Projectors,\n\nI want to book an official luxury repair entry.\n\n*Client Name:* ${name}\n*Device Model/Brand:* ${brand}\n*Issue Details:* ${problem}`;
            
            // Build routing link target
            const verifiedOwnerNumber = "918508550847";
            const targetUrl = `https://wa.me/${verifiedOwnerNumber}?text=${encodeURIComponent(messageText)}`;

            // Direct client execution pop out channel route safely
            window.open(targetUrl, '_blank');

            // Reset visual fields cleanly
            bookingForm.reset();
        });
    }
});