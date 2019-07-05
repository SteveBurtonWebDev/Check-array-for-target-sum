let checkSumInArray = (arr, target) => {
    for (let i =0; i < arr.length-1; i++) {
      for (let x = i+1; x < arr.length; x++) {
          if (arr[i] + arr[x] === target) {
               return [arr[i],arr[x]];
          }
      }
  }
  return [];



};




let answer = checkSumInArray([1,6, 30, 29, 166, 4, 82, 9, 13, 66, 3, 16, 14, 99, 12, 57,3,5],115);
if (answer.length > 0) {
  console.log(`${answer[0] + answer[1]} = ${answer[0]} + ${answer[1]}`);
} else {
  console.log("No matches found");
}
