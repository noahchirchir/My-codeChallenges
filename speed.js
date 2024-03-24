// Define a function called speedDetector which takes speed as input
function speedDetector(speed) {
    // Define constants for speed limit and kilometers per demerit point
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    // Check if the speed is within the speed limit
    if (speed <= speedLimit) {
        // If speed is within the limit, log "Ok"
        console.log("Ok");
    } else {
        // If speed exceeds the limit, calculate demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        // Check if demerit points are greater than or equal to 12
        if (demeritPoints >= 12) {
            // If demerit points are 12 or more, log "License suspended"
            console.log("License suspended");
        } else {
            // If demerit points are less than 12, log the number of demerit points
            console.log("Points:", demeritPoints);
        }
    }
}

// const speed = parseInt(prompt("Enter car speed (km/h):"));

// Check if the input is not a number or is negative
if (isNaN(speed) || speed < 0) {
    // If input is not valid, log "Invalid input! Speed should be a non-negative number."
    console.log("Invalid input! Speed should be a non-negative number.");
} else {
    // If input is valid, call the speedDetector function with the input speed
    speedDetector(speed);
}
