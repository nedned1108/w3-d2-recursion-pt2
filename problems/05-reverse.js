/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
// 1. takes in a string
// 2. return it reversed

function reverse(str) {
  let arr = str.split("");
  let newArr = [];
  if (!arr.length) return "";

  let first = arr[0]
  arr.splice(0, 1);
  newArr.unshift(first)

  return reverse(arr.join(""))

}

// function reverse(str) {
//   let first = str[0]
//   debugger
//   if (str.length === 0) {
//     debugger
//     return ""
//   }
//   debugger
//   return reverse(str.slice(1)) + first
// }

// function reverse(str) {
//   if (str.length === 0) {
//     return ""
//   }

//   let first = str[0];
//   return reverse(str.slice(1)) + first

// }

console.log(reverse("house")); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
