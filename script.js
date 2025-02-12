let attempt = 0;
let yesButtonSize = 200; // Start with a larger initial size for the Yes button

// List of prompts to display
const prompts = ["r u sure?", "JUST SAY YES u know its true", "hah what r u gonna do now?", "ok fine"];

// Set initial size for the Yes button
document.getElementById('yesButton').style.width = `${yesButtonSize}px`;
document.getElementById('yesButton').style.height = `${yesButtonSize / 3}px`; // Maintain aspect ratio

document.getElementById('noButton').addEventListener('click', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const header = document.querySelector('h1'); // Select the header element

    // Change the header text based on the attempt number
    if (attempt < prompts.length) {
        header.textContent = prompts[attempt]; // Update header with the corresponding prompt
    }

    attempt++; // Increment attempt after checking the prompt

    // Increase the size of the Yes button exponentially with each No click
    yesButtonSize *= 2; // Increase size by 50% each time
    yesButton.style.width = `${yesButtonSize}px`;
    yesButton.style.height = `${yesButtonSize / 3}px`; // Maintain aspect ratio

    // Make the No button smaller
    noButton.classList.add('btn-sm');

    // Reset Yes button text and size on the fourth attempt
    if (attempt >= 4) {
        yesButton.textContent = 'Fine... (yes)';
        yesButtonSize = 200; // Reset size to the larger initial size
        yesButton.style.width = `${yesButtonSize}px`;
        yesButton.style.height = `${yesButtonSize / 3}px`;
        noButton.classList.remove('btn-sm');
        noButton.disabled = true
        noButton.style.backgroundColor = 'grey'
        header.textContent = "Calc, will you be my valentine?"; // 
        console.log("attempt"+attempt)
        document.getElementById('valentineImage').src = 'imgs/c4.png';
        // Reset header text
    }
});

document.getElementById('yesButton').addEventListener('click', function() {
    if (attempt >= 4) {
        yesButton.textContent = 'Brandon is very cool';
        yesButton.style.transition = 'transform 0.5s';
        yesButton.style.transform = 'scale(1.2)';
        setTimeout(() => {
            window.location.href = 'celly.html'; // Redirect to the celebration page
        }, 1000);
    } else {
        window.location.href = 'celly.html';
    }
});