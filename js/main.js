// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
        const answer = item.querySelector('p');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});


// Countdown Timer
const countdown = () => {
    const targetDate = new Date("2024-11-08T00:00:00").getTime(); // Set the event date
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        clearInterval(timerInterval);
        const timerElement = document.getElementById("timer");
        if (timerElement) {
            timerElement.innerHTML = "Event Started!";
        }
        return; // Stop execution if the event has started
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Ensure that the elements exist before updating
    if (document.getElementById("days")) {
        document.getElementById("days").innerHTML = days;
    }
    if (document.getElementById("hours")) {
        document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    }
    if (document.getElementById("minutes")) {
        document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    }
    if (document.getElementById("seconds")) {
        document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    }
};

// Start the countdown
const timerInterval = setInterval(countdown, 1000);

// Optional: Call the countdown immediately to prevent delay on page load
countdown();



document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    // Simulate form submission and display a success message
    alert('Thank you! Your message has been sent.');
    this.reset(); // Clear the form
  });



