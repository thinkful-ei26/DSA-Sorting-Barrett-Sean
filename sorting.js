'use strict';

function swap(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, start, end, opCount) {
  const pivot = array[end-1];
  let j = start;

  for (let i = start; i < end-1; i++) {
    if(array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
    opCount++;
  }

  swap(array, end-1, j);
  opCount++;
  return {j, opCount};
}

function quickSort(array, start=0, end=array.length, opCount=0) {
  if (start >= end) {
    return {array, opCount};
  }

  let object = partition(array, start, end, opCount);
  const middle = object.j;
  opCount = object.opCount;

  object = quickSort(array, start, middle, opCount);
  array = object.array;
  opCount = object.opCount;
  object = quickSort(array, middle+1, end, opCount);
  array = object.array;
  opCount = object.opCount;

  return {array, opCount};
}

function mergeSort(array, opCount=0) {
  if (array.length === 1) {
    return {outArray: array, opCount};
  }
  const object1 = mergeSort(array.slice(0, Math.floor(array.length/2)), opCount);
  // console.log(object1);
  const array1 = object1.outArray;
  opCount = object1.opCount;
  const object2 = mergeSort(array.slice(Math.floor(array.length/2)), opCount);
  const array2 = object2.outArray;
  opCount = object2.opCount;
  // console.log('array1: ', array1, 'array2: ', array2);
  let currentindex1 = 0;
  let currentindex2 = 0;
  const outArray = [];
  while (currentindex1 !== array1.length || currentindex2 !== array2.length) {
    if (currentindex2 === array2.length || array1[currentindex1] <= array2[currentindex2]) {
      outArray.push(array1[currentindex1]);
      currentindex1 ++;
      opCount++;
    } else {
      outArray.push(array2[currentindex2]);
      currentindex2 ++;
      opCount++;
    }
  }
  // console.log('outArray: ', outArray);
  // console.log(opCount);
  return {outArray, opCount};
}

const dataArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
let dataArr2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];


dataArr2 = mergeSort(dataArr2);
console.log(quickSort(dataArr));