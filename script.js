// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Project Filter Functionality
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
});

// Particles.js Initialization
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});

// Typed.js Initialization
var options = {
    strings: ["Saurabh Madrap", "a Software Developer", "a Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
};
var typed = new Typed(".typing", options);

// Google Maps API Initialization
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644}, // Example coordinates, change as needed
        zoom: 8
    });
}
