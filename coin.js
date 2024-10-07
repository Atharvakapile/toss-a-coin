let currentResult = "";  // Keep track of the current result

function tossCoin() {
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');
    
    // Randomize the result
    const newResult = Math.random() < 0.5 ? "Heads" : "Tails";

    // Ensure the coin always flips, even if the result is the same
    coin.classList.add('flipping');
    
    // Reset after flip for smooth transitions
    setTimeout(() => {
        if (newResult === "Heads") {
            document.getElementById('heads').style.transform = "rotateY(0deg)";
            document.getElementById('tails').style.transform = "rotateY(180deg)";
        } else {
            document.getElementById('heads').style.transform = "rotateY(180deg)";
            document.getElementById('tails').style.transform = "rotateY(0deg)";
        }

        resultText.innerText = newResult;

        // Remove the flipping class after the animation completes
        coin.classList.remove('flipping');

        // Rotate the coin a bit extra if the result is the same as the previous one
        if (newResult === currentResult) {
            coin.style.transform = `rotateY(${360 * Math.random()}deg)`;
        } else {
            coin.style.transform = "";
        }

        currentResult = newResult;  // Update current result for comparison in the next toss
    }, 1000);  // Adjust the timing to match the animation duration
}
