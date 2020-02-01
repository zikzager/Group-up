'use strict';
let arr = [];
for (let i = 20; i > 0; i -= 1) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(arr);//генерация массива

function noobSort(arrToSort){
    let arrSorted = [];
    let arrToSort1= Array.from(arrToSort);
    for (let i = arrToSort1.length; i > 0; i -= 1){
        let x=arrToSort1.pop();
        for (let j = 0; j < arrToSort1.length; j += 1) {
            if (x > arrToSort1[j]) {
                let a = arrToSort1[j];
                arrToSort1[j] = x;
                x = a;
            }
        }
    arrSorted.push(x);
    }
    return arrSorted;
}
console.log(noobSort(arr))
function isArraySorted(sorted, original){
    for (let i=0; i < sorted.length; i+=1){
        if (sorted[i]>sorted[i+1]){
            return false;
        }
        else return true;
    }
    return check;
}
console.log(isArraySorted(noobSort(arr), arr))
