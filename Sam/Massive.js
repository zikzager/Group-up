'use strict';
let arr = [];
for (let i = 20; i > 0; i -= 1) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(arr);//генерация массива
function noobSort(arrToSort){
    let arrSorted = [];
    let arrToSortCopy= Array.from(arrToSort);
    for (let i = arrToSortCopy.length; i > 0; i -= 1){
        let x=arrToSortCopy.pop();
        for (let j = 0; j < arrToSortCopy.length; j += 1) {
            if (x > arrToSortCopy[j]) {
                let a = arrToSortCopy[j];
                arrToSortCopy[j] = x;
                x = a;
            }
        }
    arrSorted.push(x);
    }
    return arrSorted;
}
console.log(noobSort(arr))
function isSortWorked(sorted, original){
    if (sorted.length != original.length){//проверка длины (оптимизация, чокаво)
        console.log('Разная длина!')
        return false;
    }
    for (let i=0; i < sorted.length-1; i+=1){//проверка упорядоченности
        if (sorted[i] > sorted[i+1]){
            console.log('Массив не отсортирован!')
            return false;
        }
    }
    let originalCopy = Array.from(original);
    let index = 0; //нужно ли "= 0"??
    for (let i = 0; i < sorted.length; i += 1){//проверка элементов
        index = originalCopy.indexOf(sorted[i],0);
        if (index > -1){                     //проверка наличия совпадения 
            originalCopy.splice(index,1);//удаляются одинаковые элементы
        }
        else return false;
    }
    if (originalCopy[0] === undefined){
        console.log('Сортировка работает!')
        return true;
    }
    else {
        console.log('Сортировка прошла неверно!')
        return false;
    } 
}
console.log(isSortWorked(noobSort(arr),arr));
