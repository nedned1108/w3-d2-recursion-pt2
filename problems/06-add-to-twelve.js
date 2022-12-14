/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
// 1. return true if there are two adjecent numbers in the input array that can sum up to 12
// 2. otherwise, return false

function addToTwelve(arr) {
  if (!arr.length) return false;

  if (arr[0] + arr[1] === 12) return true;
  arr.shift() 

  return addToTwelve(arr)
}


// function addToTwelve(arr) {
//   if (arr.length <= 1) return false;

//   let num1 = arr[0]
//   let num2 = arr[1]

//   if (num1 + num2 === 12) {
//     return true;
//   } else {
//     return addToTwelve(arr.slice(1))
//   }
// }

// function addToTwelve(arr) {
//   if (arr.length <= 0) {
//     return false;
//   }
//   let el1 = arr[0];
//   let el2 = arr[1];
//   if (el1 + el2 === 12) {
//     return true;
//   }
//   return addToTwelve(arr.slice(1))
// }

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([12])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
