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

// Booking Form Submission Handler (Simulation)
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = bookingForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = 'Checking availability...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Booking request received! Ali will contact you shortly at 0311 5988 404 to confirm your reservation.');
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            bookingForm.reset();
        }, 2000);
    });
}
