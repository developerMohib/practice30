
// array name 

let myFriends = ['masrafee','mehedi','mahmudullah', 'tamim', 'shakib',];

let evenNumber = [];

for (const name of myFriends) {
    console.log(name, 'is my friend & name length', name.length );
    // console.log(name.length, 'name length');

    if(name.length % 2 === 0){
        evenNumber.push(name);
    }
}
console.log('friends ', evenNumber);