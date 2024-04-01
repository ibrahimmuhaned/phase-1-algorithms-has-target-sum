// function hasTargetSum(array, target) {
//   // Write your algorithm here
// }

// /* 
//   Write the Big O time complexity of your function here
// */

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;


function hasTargetSum(array, target) {
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // For each element, loop through the rest of the array
    for (let j = i + 1; j < array.length; j++) {
      // If the sum of the current element and any other element equals the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no pair of numbers adds up to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  The time complexity of this function is O(n^2), where n is the length of the input array.
  This is because there are two nested loops that iterate over the array.
*/

/* 
  Add your pseudocode here:
  1. Loop through each element in the array (let's call it the "current" element).
  2. For each "current" element, loop through the rest of the array (starting from the next element).
  3. Check if the sum of the "current" element and the current element being looped over equals the target.
  4. If it does, return true.
  5. If no pair of numbers adds up to the target, return false.
*/

/*
  Add written explanation of your solution here:
  The function iterates through each element in the array and, for each element, it checks if there is any other element in the array that, when added to the current element, equals the target. If such a pair exists, the function returns true; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
