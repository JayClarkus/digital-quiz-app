const userAnswers = {};

function recordAnswer(questionId, buttonElement) {
    const selectedAnswer = buttonElement.getAttribute('data-answer');
    const resultElement = document.getElementById(`result-${questionId}`);

    userAnswers[questionId] = selectedAnswer;

    resultElement.textContent = selectedAnswer.toUpperCase();

    const questionDiv = document.getElementById(questionId);
    const buttons = questionDiv.getElementsByTagName('button');
    for (let button of buttons) {
        button.classList.remove('selected');
    }

    buttonElement.classList.add('selected');

    updateSubmitMessage();
}

function updateSubmitMessage() {
    const answeredCount = Object.keys(userAnswers).length;
    const submitMessageElement = document.querySelector('.submit');

    submitMessageElement.textContent = `${answeredCount}/10 questions answered`;
}

function initializeAsideState() {
    const asideSection = document.getElementById('aside-section');

    if (window.innerWidth <= 600) {
        asideSection.classList.add('collapsed');
    } else {
        asideSection.classList.remove('collapsed');
    }
}

function submitAnswers() {
    const totalQuestions = 10;
    const answeredCount = Object.keys(userAnswers).length;

    if (answeredCount < totalQuestions) {
        alert(`You have only answered ${answeredCount}/${totalQuestions} questions. Please answer all questions before submitting.`);
        return;
    }

    const answerCount = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    };

    for (const questionId in userAnswers) {
        const answer = userAnswers[questionId];
        if (answer && answerCount[answer] !== undefined) {
            answerCount[answer]++;
        }
    }

    let maxScore = 0;
    let topAnswers = [];

    for (const [key, value] of Object.entries(answerCount)) {
        if (value > maxScore) {
            maxScore = value;
            topAnswers = [key];
        } else if (value === maxScore) {
            topAnswers.push(key);
        }
    }

    let finalAnswer;
    if (topAnswers.length === 1) {
        finalAnswer = topAnswers[0];
    } else {
        const randomIndex = Math.floor(Math.random() * topAnswers.length);
        finalAnswer = topAnswers[randomIndex];
    }

    // Navigate to the appropriate result page
    const resultPages = {
        a: 'choleric',
        b: 'sanguine',
        c: 'melancholy',
        d: 'phlegmatic'
    };

    window.location.href = resultPages[finalAnswer];
}

function toggleAside() {
    const asideSection = document.getElementById('aside-section');
    const toggleIcon = document.getElementById('aside-toggle-icon');

    asideSection.classList.toggle('collapsed');

    if (asideSection.classList.contains('collapsed')) {
        toggleIcon.src = '/images/menu.png';
    } else {
        toggleIcon.src = '/images/menu_open.png';
    }
}

function openLink(link) {
    if (link === 'personality') {
        window.open("/", "_self");
    }
}

document.getElementById('aside-toggle').addEventListener('click', toggleAside);

initializeAsideState();

window.addEventListener('resize', initializeAsideState);

alert("Website is still in development, some features may not function yet.");