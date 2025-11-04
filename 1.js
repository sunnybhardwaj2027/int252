let arr1 = [1, 2, 3, 4, 5, 6];

console.log("original array: ", arr1);

for(let i = 0; i < arr1.length; i++){
    arr1[i] = arr1[i]*arr1[i];
}

console.log("after squaring array: ", arr1);

let mxm = -1;
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > mxm){
        mxm = arr1[i];
    }
}

console.log("largest element: ", mxm);

let secondLargest = -1;

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > secondLargest && arr1[i] < mxm){
        secondLargest = arr1[i];
    }
}

console.log("second largest element: ", secondLargest);

