'use strict';

// input: [8, 4, 5, 2, 6, 1 , 7, 10 ,9, 3], small = 1, large = 10
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// make output arr that has same length as input arr, outputArr[0] = small
// outputArr[arr.length-1] = large
// loop through inputArr, if index value of input is closer to small 
// (< (large - small) / 2) 



// let tmp = arr[0]
// arr[0] = small, arr[arr.length-1] = large
// 

function bucketSort(array, small, large) {
  const newArr = [];
  for (let i = 0; i <= large - small; i++) {
    newArr.push([]);
  }

  for (let i = 0; i < array.length; i++) {
    newArr[array[i] - small].push(array[i]); 
    console.log(newArr);
  }

  return newArr.reduce((acc, val) => acc.concat(val), []);
  // newArr.length = large - small + 1;
}

let data = [8, 4, 5, 2, 6, 1 , 7, 10 ,9, 3];
console.log(bucketSort(data, 1, 10));

