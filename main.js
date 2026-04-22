// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.car-card, .feature-card, .booking-card, .section-head');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    el.style.opacity = '0'; // Initial state for observer
    observer.observe(el);
});

// Booking Form Submission Handler (WhatsApp Integration)
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const pickupDate = bookingForm.querySelectorAll('input')[0].value;
        const returnDate = bookingForm.querySelectorAll('input')[1].value;
        const carModel = bookingForm.querySelector('select').options[bookingForm.querySelector('select').selectedIndex].text;
        
        const phoneNumber = '923115988404'; // Official business number
        const message = `Hello Friends Rent a Car, I would like to book a ${carModel}.\n\n` + 
                       `Pickup: ${pickupDate}\n` + 
                       `Return: ${returnDate}\n\n` +
                       `Please let me know the availability. Thanks!`;
        
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Simulating processing
        const btn = bookingForm.querySelector('button');
        btn.innerText = 'Redirecting to WhatsApp...';
        btn.disabled = true;
        
        setTimeout(() => {
            window.open(waUrl, '_blank');
            btn.innerText = 'Check Availability';
            btn.disabled = false;
        }, 1000);
    });
}
