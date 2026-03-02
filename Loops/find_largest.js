let arr = [42,23,13,2,523,232,23,223,];
let max = arr[0];
for(let i = 0; i<arr.length; i++){

    if(arr[i] < max){
        max = arr[i];
    }
    
}
console.log(max);