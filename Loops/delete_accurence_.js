
// Writea JS program to delete all occurrencesof element ‘num’ in a given array. Example: if arr=[1,2,3,4,5,6,2,3]& 
// num = 2 Result should be arr=[1,3,4,5,6,3]


//method 1 
// let info = [2,2,2,2,5,2,2,2,2,9,9,2,10,1,11,12,100,2,2,2,2,2,11,12,14,15,17,22,2,2,2,100];
// let newinfo =[]
// let num = 2, count =0 ;

// for(let i = 0; i<info.length; i++){
//     console.log(info.length);
//     if(info[i] != num){
//         newinfo[count] = info[i]
//         count++
//     }

// }

// console.log(info);
// console.log(newinfo);



//method2
// let arr = [1,2, 3, 4, 5, 2, 2, 3];
// let num = 2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);


// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] === num) {
//     arr.splice(i, 1);
//   }
// }