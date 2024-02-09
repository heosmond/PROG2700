function timeUntilBirthday(birthDate) {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneWeek = oneDay * 7;

    if (today.getTime() > nextBirthday.getTime()) {
        nextBirthday.setFullYear(today.getFullYear() + 1); // set next year's birthday
    }

    const timeRemaining = nextBirthday.getTime() - today.getTime();

    const weeks = Math.floor(timeRemaining / oneWeek);
    const days = Math.floor((timeRemaining % oneWeek) / oneDay);
    const hours = Math.floor((timeRemaining % oneDay) / oneHour);
    const minutes = Math.floor((timeRemaining % oneHour) / oneMinute);
    const seconds = Math.floor((timeRemaining % oneMinute) / oneSecond);

    return { weeks, days, hours, minutes, seconds };
}

function countdownToBirthday(birthDate) {
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const { weeks, days, hours, minutes, seconds } = timeUntilBirthday(birthDate);
        if (weeks === 0 && days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            countdownElement.textContent = "Happy Birthday!";
        } else {
            countdownElement.textContent = `Time until birthday: ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Update every second
}

// Example usage
const birthday = new Date('February 9, 2003'); // Leap year birthday
countdownToBirthday(birthday);