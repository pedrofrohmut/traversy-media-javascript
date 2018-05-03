const countdown = document.querySelector(".countdown");

// CONSTANTS
const launchDate = new Date("Jan 1, 2019 13:00:00").getTime();

// FUNCTIONS
const countdownInterval = setInterval(() => {
    // Get todays date and time in ms
    const now = new Date().getTime();
    // Get distance from now to lauch date
    const timeToLaunch = launchDate - now;
    // Time Calculations
    const days   = Math.floor( timeToLaunch / (1000 * 60 * 60 * 24) );
    const hours  = Math.floor( ( timeToLaunch % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60) );
    const minutes = Math.floor( ( timeToLaunch % (1000 * 60 * 60) ) / (1000 * 60) );
    const seconds = Math.floor( ( timeToLaunch % (1000 * 60) ) / 1000 );
    // Display the result
    countdown.innerHTML = `
        <div>${days} <span>Days</span></div>
        <div>${hours} <span>Hours</span></div>
        <div>${minutes} <span>Minutes</span></div>
        <div>${seconds} <span>Seconds</span></div>
    `;
    // If launch date passed
    if (timeToLaunch < 0) {
        // Stop the countdown
        clearInterval(countdownInterval);
        // Style and output text
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "Launched";
    }
}, 1000);