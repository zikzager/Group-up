function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let sourceArray = [];

for (let i = 1; i <= 20; i++) {
  let max = 30;
  let randNumber = getRandomInt(max);
   sourceArray.push(randNumber);
   }

let origArray = sourceArray.slice(); /*эта переменная нужна, 
чтобы вычислить контрольную сумму и сравнить с суммой
 элементов отсортированного массива, т.к. из первого 
 массива все вылетит в процессе*/
 
let sortedArray = sortArray(sourceArray);
console.log(sortedArray);
let controlSum = origArray.reduce( (sum, current) => sum + current, 0 );
let sortedArraySum = sortedArray.reduce( (sum, current) => sum + current, 0 );
let seeComparingResults = sortedArray.every(compareClosestElements);
console.log(checkIfSortedCorrectly());
 
 function findMinIndex(arr) {
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function sortArray(unsortedArray) {
  let sortedArray = [];
while (unsortedArray.length > 0) {
let nextMinIndex = findMinIndex (unsortedArray);
let min = unsortedArray.splice (nextMinIndex, 1);
sortedArray.push (min[0]);
}
return sortedArray;
}
function sum(arr) {
[0] + [1];
}

function checkControlSum(arr){
if (controlSum === sortedArraySum) {
 return true;
} else {
  return false;
} 
}
function compareClosestElements(arr) {
return [0] < [1];
}

function checkIfSortedCorrectly (arr) {
 let controlSumIsRight = checkControlSum(arr);
 if (seeComparingResults = false) {
   return false;
  } 
  else if (controlSumIsRight = false) {
    return false;
  }
  else return true;
}


