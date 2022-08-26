// isPrime - Returns true or false, indicating whether the given number is prime.

const isPrime = (num) => {
  if (num <= 1 || num === 0) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(17)); // true
console.log(isPrime(10000000000000)); // false

// factorial - Returns a number that is the factorial of the given number.

const factorial = (num) => {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720

// fib - Returns the nth Fibonacci number.

const fib = (num) => {
  return num <= 1 ? num : fib(num - 1) + fib(num - 2);
};

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(10)); // 55
console.log(fib(20)); // 6765

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

const isSorted = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);

  return sorted.every((elem, i) => {
    return elem === arr[i];
  });
};

console.group("isSorted");
console.log(isSorted([])); // true
console.log(isSorted([-Infinity, -5, 0, 3, 9])); // true
console.log(isSorted([3, 9, -3, 10])); // false
console.groupEnd();

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
const reverse = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverse(""));
console.log(reverse("abcdef"));

//indexOf - Implement the indexOf function for arrays.

const indexOf = (arr, symb) => arr.indexOf(symb);
console.log(indexOf([1, 2, 3], 1)); // 0
console.log(indexOf([1, 2, 3], 4)); // -1

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
const isPalindrome = (str) => {
  const newString = str.split(" ").join("").toLowerCase();
  return newString === reverse(newString);
};

console.log(isPalindrome("")); // true
console.log(isPalindrome("abcdcba")); // true
console.log(isPalindrome("abcd")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true

// uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?
const uniq = (arr) => [...new Set(arr)];

console.log(uniq([])); // []
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]

// intersection - Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?
const intersection = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
