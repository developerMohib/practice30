
// regular function 

function squareFunc(a, b, c, d ){
    let fstSQ = a * a ;
    let scndSQ = b * b;
    let thrdSQ = c * c; 
    let frthSq = d * d;

    let sum = fstSQ + scndSQ + thrdSQ + frthSq ;
    console.log('Sum of Four Number : ', sum);

    let average = sum / 4 ;
    return average ;
}

let makeSquare = squareFunc(3,4,5,6);
console.log(makeSquare, 'square value');
document.write('<br> average value of -', makeSquare);

// arrow function 

const makeSquareFunction = (a, b, c, d) => {
    let fstSQ = a * a ;
    let scndSQ = b * b;
    let thrdSQ = c * c; 
    let frthSq = d * d;

    let sum = fstSQ + scndSQ + thrdSQ + frthSq ;
    console.log('Sum of Four Number : ', sum);

    let average = sum / 4 ;
    return average ;
}
let makeSquareReturn = makeSquareFunction(3,4,5,6);
console.log('average value of', makeSquareReturn);
document.write('<br> average value of', makeSquareReturn);