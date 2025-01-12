function recordAnswer(questionId, buttonElement) {
    const selectedAnswer = buttonElement.getAttribute('data-answer'); // Get the answer (a, b, c, or d)
    const resultElement = document.getElementById(`result-${questionId}`);

    // Display the selected answer in the result element
    resultElement.textContent = selectedAnswer.toUpperCase();

    // Remove "selected" class from all buttons in the same question
    const questionDiv = document.getElementById(questionId);
    const buttons = questionDiv.getElementsByTagName('button');
    for (let button of buttons) {
        button.classList.remove('selected');
    }

    // Add "selected" class to the clicked button
    buttonElement.classList.add('selected');
}

function initializeAsideState() {
    const asideSection = document.getElementById('aside-section');
    if (window.innerWidth <= 600) {
        asideSection.classList.add('collapsed');
    } else {
        asideSection.classList.remove('collapsed');
    }
}

// Initialize state on page load
initializeAsideState();

// Re-check on window resize (optional, to handle dynamic resizing)
window.addEventListener('resize', initializeAsideState);

document.getElementById('aside-toggle').addEventListener('click', function () {
    const asideSection = document.getElementById('aside-section');
    const toggleIcon = document.getElementById('aside-toggle-icon');

    // Toggle the "collapsed" class
    asideSection.classList.toggle('collapsed');

    // Switch the icon image based on the state
    if (asideSection.classList.contains('collapsed')) {
        toggleIcon.src = '/images/menu.png'; // Collapsed icon
    } else {
        toggleIcon.src = '/images/menu_open.png'; // Expanded icon
    }
});

alert("Website is still in development, some features may not function yet.");