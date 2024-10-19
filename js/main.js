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

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (difference < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "Event Started!";
    }
};

const timerInterval = setInterval(countdown, 1000);


$(function(){
    // Marquee for the de-marquee-list
    $('.de-marquee-list').marquee({
        direction: 'left',       // Scroll left
        duration: 25000,         // Duration of one complete scroll cycle (15 seconds)
        gap: 0,                  // No gap between items
        delayBeforeStart: 0,      // No delay before start
        duplicated: true,        // Duplicate the marquee items to create an infinite loop effect
        startVisible: true        // Start when the element is visible
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    // Simulate form submission and display a success message
    alert('Thank you! Your message has been sent.');
    this.reset(); // Clear the form
  });



