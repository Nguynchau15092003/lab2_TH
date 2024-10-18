document.getElementById('submitButton').addEventListener('click', function() {
    const answers = {
        q1: 'Paris',
        q2: 'Mars',
        q3: 'Pacific'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const result = document.getElementById('score');

    for (let question in answers) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    result.textContent = `Your score: ${score}/3`;
});