String.prototype.CheckPalindrome = function () {
  let str = this;
  //let reverseStr = str.split("").reverse().join("");
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  console.log("reverseStr", reverseStr);

  for (let i = 0; i < str.length; i++) {
    console.log(str[i], reverseStr[i]);
    if (str[i] !== reverseStr[i]) {
      return false;
    }
  }

  return true;
};

let str = "abcdedcba";
const result = str.CheckPalindrome();

console.log("result", result);
