// Native JavaScript Engine for Date Tracking, WhatsApp Forwarding & Conversion Utilities

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

    // 2. Persistent Flash Sale Urgency Countdown Engine
    function initializeCountdown() {
        const hoursNode = document.getElementById('timer-hours');
        const minsNode = document.getElementById('timer-mins');
        const secsNode = document.getElementById('timer-secs');

        if (!hoursNode || !minsNode || !secsNode) return;

        // Retrieve remaining seconds from localStorage or start fresh (4h 18m 42s)
        let totalSeconds = localStorage.getItem('dfp_timer_secs');
        if (!totalSeconds || parseInt(totalSeconds) <= 0) {
            totalSeconds = (4 * 3600) + (18 * 60) + 42; 
        } else {
            totalSeconds = parseInt(totalSeconds);
        }

        setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                localStorage.setItem('dfp_timer_secs', totalSeconds);
            } else {
                totalSeconds = (4 * 3600) + (18 * 60) + 42; // Auto-reset loop
            }

            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;

            hoursNode.textContent = String(h).padStart(2, '0');
            minsNode.textContent = String(m).padStart(2, '0');
            secsNode.textContent = String(s).padStart(2, '0');
        }, 1000);
    }
    initializeCountdown();

    // 3. Service Booking Event Handler & Conversion Tracking Engine
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Halt typical form page refreshing

            // Safely fetch field variables
            const nameNode = document.getElementById('srv-name');
            const brandNode = document.getElementById('srv-brand');
            const problemNode = document.getElementById('srv-problem');

            const name = nameNode ? nameNode.value.trim() : '';
            const brand = brandNode ? brandNode.value.trim() : '';
            const problem = problemNode ? problemNode.value.trim() : '';

            // Basic Field Validation
            if (!name || !brand || !problem) {
                alert('Please fill out all fields before submitting your repair booking.');
                return;
            }

            // Fire Google Ads Lead Conversion Event if Google Analytics/Ads gtag exists
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-18326731559',
                    'event_category': 'Service Booking',
                    'event_label': brand
                });
            }

            // Construct text string layout for WhatsApp delivery
            const messageText = `Hello Dream Focus Projectors,\n\nI want to book an official repair service entry.\n\n*Client Name:* ${name}\n*Device Model/Brand:* ${brand}\n*Issue Details:* ${problem}`;
            
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

// 4. Global Product Catalog Category Filter Handler
window.filterCatalog = function (category, eventTarget) {
    const items = document.querySelectorAll('.catalog-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Reset all filter button visual states
    buttons.forEach(btn => {
        btn.classList.remove('bg-amber-500', 'text-slate-950');
        btn.classList.add('bg-slate-800', 'text-slate-300');
    });

    // Set clicked button state to active
    if (eventTarget) {
        eventTarget.classList.remove('bg-slate-800', 'text-slate-300');
        eventTarget.classList.add('bg-amber-500', 'text-slate-950');
    }

    // Toggle catalog item visibility based on category class
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
};
