// Nested arrya with multiple data types

let myArray = [[1, 2, 3], ["a", 1,45,445,100,20000, "c"], [true, false, true]];
console.log(myArray);

for( let i = 0; i<myArray.length; i++){
    for(let j = 0; j<myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}