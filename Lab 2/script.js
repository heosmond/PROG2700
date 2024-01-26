// takes array as an argument
function unveilMagicWithLargestSum(sequence) {
    // checks if value is an array
    if (!Array.isArray(sequence) || sequence.length === 0) {
        return "Invalid input. Please provide a non-empty array of numbers.";
    }

    // declaring and initializing variables
    let currentStreak = 1;
    let longestStreak = 1;
    let currentSum = sequence[0];
    let largestSum = sequence[0];

    // loops through each value in array
    for (let i = 1; i < sequence.length; i++) {
        // checks if current value is one greater than previous (in a sequence)
        if (sequence[i] === sequence[i - 1] + 1) {
            // increases streak counter and adds value to sum
            currentStreak++;
            currentSum += sequence[i];
        } else {
            // streak counter and sum rest
            currentStreak = 1;
            currentSum = sequence[i];
        }

        // checks if current streak is the longest or if the sum of the current streak is greater
        if (currentStreak > longestStreak || (currentStreak === longestStreak && currentSum > largestSum)) {
            longestStreak = currentStreak;
            largestSum = currentSum;
        }
    }

    // returns object
    return {
        longestStreak: longestStreak,
        largestSum: largestSum
    };
}

// Calling the function with the test case values
const feastResult1 = unveilMagicWithLargestSum([1, 2, 3, 6, 9, 34, 2, 6]);
console.log("Magical Result 1:", feastResult1);

const feastResult2 = unveilMagicWithLargestSum([3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3]);
console.log("Magical Result 2:", feastResult2);

const feastResult3 = unveilMagicWithLargestSum([100, 101, 102, 3, 4, 5, 6, 9]);
console.log("Magical Result 3:", feastResult3);