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

// 0(nk)
function bucketSort(array, small, large) {
  const newArr = []; // 0(1)
  for (let i = 0; i <= large - small; i++) { // 0(1)
    newArr.push([]); // makes buckets
  }

  for (let i = 0; i < array.length; i++) { // filling buckets
    newArr[array[i] - small].push(array[i]); // 0(n)
    // console.log(newArr);
  }
  // iterate, spread and push
  const results = [];
  for (let i = 0; i < newArr.length; i++) { // 0(n)
    results.push(...newArr[i]); // emptying buckets
  }
  return results;
  // return newArr.reduce((acc, val) => acc.concat(val), []); // 0(n^2)
  // newArr.length = large - small + 1;
}

let data = [8, 4, 5, 2, 6, 1 , 7, 10 ,9, 3];
console.log(bucketSort(data, 1, 10));

