let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100.';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low!';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high!';
    } else {
        feedback.textContent = 'Correct! You guessed it!';
    }
});