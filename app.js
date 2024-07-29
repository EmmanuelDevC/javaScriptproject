// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example
  console.log(reverseString("hello")); // Output: "olleh"
  


// Count Characters:
function countCharacters(str) {
    return str.length;
  }
  
  // Example
  console.log(countCharacters("hello")); // Output: 5
  



// Capitalize Words:
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Example
  console.log(capitalizeWords("hello world")); // Output: "Hello World"
  


//Array Functions:
function findMaximum(arr) {
    return Math.max(...arr);
  }
  
  function findMinimum(arr) {
    return Math.min(...arr);
  }
  
  // Example
  const numbers = [1, 2, 3, 4, 5];
  console.log(findMaximum(numbers)); // Output: 5
  console.log(findMinimum(numbers)); // Output: 1
  


//Sum of Array:

function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Example
  console.log(sumOfArray(numbers)); // Output: 15


//Filter Array:

function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Example: Filtering even numbers
  const evenNumbers = filterArray(numbers, x => x % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  
//Mathematical Functions
//Factorial:
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Example
  console.log(factorial(5)); // Output: 120
 
//Prime Number Check:
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  // Example
  console.log(isPrime(7)); // Output: true
  console.log(isPrime(10)); // Output: false

//Fibonacci Sequence:
function fibonacci(n) {
    const sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      sequence.push(a);
      [a, b] = [b, a + b];
    }
    return sequence;
  }
  
  // Example
  console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  