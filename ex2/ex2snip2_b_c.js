/*Write an arrow function that takes an array as the input and filters out the numbers inside the array
 which are less than zero and are not integers. The function should return the resulting array.*/


let numbersfunc = (array) => { let array2 = [];
        for (let i = 0; i <array.length ; i++) {
            if(array[i]>0 && Number.isInteger(array[i])) {
                array2.push(Math.pow(array[i],2));
                //array2.push(array[i]);
            }
        }
        return array2;
}
            ;
let numbers = [-1,-2,-3,1, 2, 3,4,5,6,-8,7,8,9,];

let biggerZeroArray = numbersfunc(numbers);
console.log(biggerZeroArray);

//verhält sich komisch, abklären
for(let n of biggerZeroArray){
    console.log(biggerZeroArray[n]);}