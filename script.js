const address = 'The Palm Mall, Main Rd, TP Nagar, Lalu Ram Nagar, Korba, Chhattisgarh, India';

// Split the string at the first comma
const [firstPart, ...secondPartArray] = address.split(',');
const firstString = firstPart.trim();
const secondString = secondPartArray.join(',').trim();

console.log('First String:', firstString);
console.log('Second String:', secondString);
