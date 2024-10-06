const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Function to find even numbers in an array
const findEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
// Function to find odd numbers in an array
const findOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);

console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));

// Function to print a pattern of stars
const printPattern = (n) => {
    for (let i = 1; i <= n; i++) {
      console.log('* '.repeat(i));
    }
  };
  
  printPattern(5);
  