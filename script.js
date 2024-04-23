function isPalindrome(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return str === reversedStr;
  }
  
  

  
  console.log(isPalindrome('madam')); // true
  console.log(isPalindrome('hello')); // false
  


  
  function findMinAndMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
    return { min, max };
  }

  let arr = [5, 2, 8, 3, 1, 6];
console.log(findMinAndMax(arr)); // { min: 1, max: 8 }



function findMissingNumber() {
  let arr = [11, 12, 14, 15, 16, 18, 19, 20];
  for (let i = 11; i <= 20; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

console.log(findMissingNumber()); // 13

