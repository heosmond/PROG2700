let score = 0;
let unlockedObjects = [];

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (!unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        document.getElementById(object).classList.add('unlocked');
        alert(`Congratulations! You've unlocked the ${object}!`);
    }
}

function checkUnlockables() {
    if (score >= 10) {
        document.getElementById('planet').classList.remove('unclickable');
        unlockObject('planet');
    }
    if (score >= 20) {
        document.getElementById('rocket').classList.remove('unclickable');
        unlockObject('rocket');
    }
    if (score >= 30) {
        document.getElementById('alien').classList.remove('unclickable');
        unlockObject('alien');
    }
}


function toggleSize(clickedIcon) {
    var icon = document.querySelector(clickedIcon);
    var currentSize = parseInt(window.getComputedStyle(icon).fontSize);
    var normalSize = 24; // Initial size of the icon
    var largerSize = 48; // Size when toggled

    var newSize = currentSize === normalSize ? largerSize : normalSize;

    icon.style.fontSize = newSize + 'px';
}

var clickCount = 0;
var clickedElements = [];

// Function to handle clicks on the elements
function handleClick(event) {
var clickedElement = event.target;
// Check if the clicked element has the 'clickable' class and hasn't been clicked before
if (clickedElement.classList.contains('clicked') && !clickedElements.includes(clickedElement)) {
    clickedElements.push(clickedElement);
    clickCount++;

    // Remove the 'clickable' class to prevent further clicks on the same element
    clickedElement.classList.remove('clicked');

    // Check if all three elements have been clicked at least once
    if (clickCount === 3) {
    // unhide element
    document.getElementById('comet').classList.remove('hidden');
    }
}
}

// Attach the click event listener to each clicked element
var clickableElements = document.querySelectorAll('.clicked');
clickableElements.forEach(function (element) {
element.addEventListener('click', handleClick);
});
