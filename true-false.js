//Falsy:
//false
//0
//""
//undefined
//null
//NaN
//every number is truthy other than 0, every string is truthy other than empty string

//Truthy:
//'0', ' ', []

let name = 12;
if (name || name == 0) {
    console.log("condition is true");
} else {
    console.log("condition is false");
} 