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