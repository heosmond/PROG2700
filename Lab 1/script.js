
// Sample airport data for Halifax
const halifaxAirport = {
    name: 'Halifax Stanfield International Airport',
    code: 'YHZ',
  };
  
// Function to check if the location is Halifax
function checkLocation(location) {
return location.toLowerCase() === 'halifax';
}
  
// Main program
function main() {
const userLocation = "Halifax";

// Check if the location is Halifax
if (checkLocation(userLocation)) {
    // If yes, display Halifax airport information
    console.log(`You are at ${halifaxAirport.name} (${halifaxAirport.code}).`);
} else {
    // If no, ask for destination
    console.log('Where are you going?');
}
}
  
  // Run the program
  main();