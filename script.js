// ===== Slider Functionality =====
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Wrap around if index is out of bounds
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
    }
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

// Function to change slide
function changeSlide(n) {
    clearInterval(autoSlideInterval); // Clear auto-slide when user manually changes slide
    showSlide(currentSlideIndex + n);
    startAutoSlide(); // Restart auto-slide
}

// Function to set current slide from dot
function currentSlide(n) {
    clearInterval(autoSlideInterval);
    showSlide(n);
    startAutoSlide();
}

// Auto-slide function
function autoSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Start auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 4000); // Change slide every 4 seconds
}

// Initialize slider on page load
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    startAutoSlide();
});

// ===== Dark Mode Functionality =====
const darkModeBtn = document.getElementById('darkModeBtn');

// Check for saved dark mode preference in localStorage
function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        updateDarkModeButton();
    }
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeButton();
}

// Update button text
function updateDarkModeButton() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (darkModeBtn) {
        darkModeBtn.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

// Add event listener to dark mode button
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleDarkMode);
}

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
});

// ===== Form Submission (Demo) =====
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully! (Demo - No backend)');
            form.reset();
        });
    });
});

// ===== Smooth scrolling for navigation (bonus) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
