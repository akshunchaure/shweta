function nextStep(step) {
    let container = document.getElementById('container');
    container.classList.remove('fade');

    if (step === 1) {
        container.innerHTML = '<p>Do you want to read something special I have written for you?</p>' +
                              '<button onclick="nextStep(2)">Click Me</button>';
    } else if (step === 2) {
        container.innerHTML = '<img src="Shweta.jpg" alt="Her Beautiful Image">' +
                              '<p>Hey cuteness,<br>You may think the time’s not right,<br>' +
                              'But I assure you, I’ll always be by your side—,<br>' +
                              'Reminding you of your inner strength, <br> And who you truly are from the inside <br> <br> Highs and lows are part of life,<br> But I know you’ll shine so bright— <br> Like sunshine after a rainy day,<br>Pushing all the dark clouds away.<br><br>I’ll suck away all your sadness and despair,<br>Wipe away every trace of hopelessness <br>That’s the magic of my words—<br>They heal, uplift, and transform lives.<br><br><br>By Akshun Chaure </p>' +
                              '<button onclick="nextStep(3)">Click Me</button>';
    } else if (step === 3) {
        container.innerHTML = '<h2>Its so beautiful to make you feel special😍</h2>' +
                              '<p>Wishing you a beautiful day with a smile on your face everytime you think about this 😉<br><br>' +
                              'I do not want anything from you<br>' +
                              'I feel good making you feel this way💖</p>';
    }
    container.classList.add('fade');
}