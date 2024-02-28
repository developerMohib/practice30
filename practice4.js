
// numbers 
let myFirstArray = [13,14,15,16,17,12];
let mySecondArray = [23,24,25,26,27,22];

let myFinalArray = [...myFirstArray, ...mySecondArray];
let finalArrayNumber = [...myFinalArray];
console.log(myFinalArray , 'my final array') ;
console.log(finalArrayNumber , 'my final array all number') ;

let maxFromFinalArray = Math.max(...myFinalArray);
console.log('max Number :', maxFromFinalArray);

// arrow function 
const maxNumber = (finalArrayNumber) => {

    let maxInitial = finalArrayNumber[0];

    for (const number of finalArrayNumber) {
        if(maxInitial < number){
            maxInitial = number;
        }
    }
    return maxInitial;
}
let myMax = maxNumber(finalArrayNumber);
console.log('my max :', myMax);
// name 