
// regular function 

function multiply(a,b,c){
    return (a*b*c);
}
let multiplyNumber = multiply(2,3,4);
document.write('three number multiply : ', multiplyNumber);
console.log('three number multiply : ', multiplyNumber);

// arrow function 

const makeMultiply = (a, b, c) => {
    return (a*b*c);
}
console.log( 'make multiply :', makeMultiply(2,3,4) );
document.write( '<br> make multiply :', makeMultiply(2,3,4) );

// templete sign 

const myself = `I am web developer`;
const hobby = `I love to do coding`;
const food = `I love to eat biriyani, dourani, kelani`;

document.write(` <br> ${myself}. ${hobby}. ${food}`);
console.log(` <br> ${myself}. ${hobby}. ${food}`);

// default parameter 

const arroFunction = (a, b=2) => (a + b);

console.log( `default paramete added : `, arroFunction(3) );
document.write( `<br> default paramete added : `, arroFunction(3) );