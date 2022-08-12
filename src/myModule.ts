// Variable
const PI : number = 3.14;

// Interface
interface Person {
    id : number;
    name : string;
}

// Function
function generateRandomNumber() : number {
    return Math.floor(Math.random() * 100);
}

export { PI, Person, generateRandomNumber };