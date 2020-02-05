function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let sourceArray = [];

for (let i = 1; i <= 20; i++) {
  let max = 30;
  let randNumber = getRandomInt(max);
   sourceArray.push(randNumber);
   }
console.log(sourceArray);

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

let sortedArray = sortArray(sourceArray);

console.log(sortedArray);
